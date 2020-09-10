import React from 'react';
import ReactDOM, { render } from 'react-dom';

import styled from 'styled-components';

function Footer() {
    const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    `
    return(
        <div className="Btn">
        <Button>RESTART</Button>
        </div>
    )
}

export default Footer;