import React from 'react';
// import ReactDom from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
            <h1 className="title">Tic Tac Toe</h1>
            <div className="marubatsu l-flex">
                <div className="maru active">○</div>
                <div className="batsu">×</div>
            </div>
        </header>
        )
    }
}

export default Header;