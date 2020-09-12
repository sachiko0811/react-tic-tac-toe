import React from 'react';
// import ReactDOM, { render } from 'react-dom';

import styled from 'styled-components';

const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    `

class Footer extends React.Component {
    
    render() {
        return(
            <div className="Btn">
            <Button>RESTART</Button>
            </div>
        )
    }
    
}

export default Footer;