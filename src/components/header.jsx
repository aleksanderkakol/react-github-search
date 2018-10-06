import React from 'react';


export class Header extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick = () => {
        window.location.reload();
    };

    render() {
        return (
            <header className='header'>
                <img onClick={this.handleClick} className='header-img' src={require("../svg/github.svg")}/>
                <h1 onClick={this.handleClick} className='header-title'>GitHub Search</h1>
            </header>
        )
    }
}

export default Header;