import React from 'react';

export class Article extends React.Component {
    constructor(props){
        super(props);
    }

    onClick = (i, e) => {
        localStorage.setItem(this.props.value, JSON.stringify(e));
        localStorage.setItem('date', Date.now());
    };

    render() {

        let repositories = this.props.repos.map((data, i) => {
            return (
                <article className='article' key={data.id}>
                    <h2 className='article-title'>{data.name}</h2>
                    <div className='stars'>Stars: {data.stargazers_count}</div>
                    <div className='owner-info'>
                        <img className='avatar' src={data.owner.avatar_url} alt={data.owner.login}/>
                        <span className='owner'>{data.owner.login}</span>
                    </div>
                    <p className='description'>{data.description}</p>
                    <button onClick={() => this.onClick(i, data)} className="btn">Save</button>
                </article>
            )
        });
        return (
            <div className='content'>
                {repositories}
            </div>
        )
    }
}

export default Article;
