import React from 'react';

export class Buttons extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='buttons'>
                <button className='back btn' onClick={this.props.onPrev}>Back</button>
                <span className='page'>{this.props.page}</span>
                <button className='next btn' onClick={this.props.onNext} >Next</button>
            </div>
        )
    }
}

export default Buttons;