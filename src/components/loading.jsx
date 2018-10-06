import React from 'react';

export class Loading extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='loading'>
                <div className="red"/>
                <div className="green"/>
                <div className="blue"/>
            </div>
        )
    }
}

export default Loading;