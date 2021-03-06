import React from 'react';
import Section from './section.jsx';
import Header from './header.jsx';

export class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <Section/>
            </div>
        )
    }
}

export default Main;
