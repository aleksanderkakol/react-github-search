import 'babel-polyfill';
import React from 'react';
import Article from './article.jsx';
import Loading from './loading.jsx';
import Buttons from './buttons.jsx';

const wait = 1500;
const enter = 13;
const url = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=';


export class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            page: 1,
            loading: false,
            repositories: [],
            scroll: false,
            offsetTop: undefined
        }
    }

    componentDidMount = () => {
        this.timer = null;
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            offsetTop: document.querySelector(".section").offsetTop
        })
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleChange = (event) => {

        let label = document.querySelector('.search-label');
        label.classList.remove('move-up');

        clearTimeout(this.timer);

        this.setState({
            value: event.target.value,
            loading: true,
            page: 1
        });

        this.timer = setTimeout(this.triggerChange, wait);

    };

    handleKeyDown = (event) => {
        this.setState({
            loading: true
        });
        if (event.keyCode === enter) {
            this.triggerChange();
            clearTimeout(this.timer);
        }
    };

    triggerChange = () => {
        if (this.state.value.length > 0) {
            fetch(url + this.state.value + '&page=' + this.state.page)
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        repositories: data.items,
                        loading: false
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        } else { }
    };

    onNext = async () => {
        await this.setState({
            loading: true,
            page: this.state.page + 1
        });
        this.triggerChange();
    };

    onPrev = async () => {
        if (this.state.page <= 1) {
            await this.setState({
                page: 1
            });
        } else {
            await this.setState({
                loading: true,
                page: this.state.page - 1
            });

            this.triggerChange();
        }
    };

    handleScroll = () => {
        if (window.pageYOffset > this.state.offsetTop) {
            this.setState({
                scroll: true
            });
        } else {
            this.setState({
                scroll: false
            })
        }
    }

    render() {

        let loading = !this.state.loading || this.state.value.length < 1 ?
            <Article value={this.state.value} repos={this.state.repositories} />
            : <Loading />;

        let buttons = this.state.repositories.length > 0 ? <Buttons page={this.state.page} onNext={this.onNext} onPrev={this.onPrev} /> : null;


        return (
            <div>
                <section className={`section ${this.state.scroll ? " sticky" : ""}`}>
                    <label className='search-label move-up'>
                        <input className='search-input' type="text" placeholder='Search Repositories' onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
                    </label>
                </section>
                <article className="list">
                    {loading}
                    {buttons}
                </article>
            </div >
        )
    }
}

export default Section;