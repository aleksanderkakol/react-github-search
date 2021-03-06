
import React from 'react';
import ReactDOM from 'react-dom';
require('../scss/main.scss');

import Main from './main.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Main/>
        )
    }
}

document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});
