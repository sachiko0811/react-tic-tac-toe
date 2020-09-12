import React from 'react';
// import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Button = styled.button`
    background-color: black;
    color: white;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    `

class Main extends React.Component {

    constructor(props) {
        super(props);

    this.state = {
        countNum: 0,
        cells: new Array(9),
        progress: true,
        isCircleTurnNow: true,
        circleElement: document.querySelector('.maru'),
        batsuElement: document.querySelector('.batsu'),
        cellsElements: document.querySelectorAll('.cell'),
        msgElement: document.querySelector('.msg')
    }
}

    onResetBtn = () => {
        window.location.reload();
    }

    toggleTurn = () => {
        const context = this.state;
        const { isCircleTurnNow, circleElement, crossElement } = context
        if (isCircleTurnNow) {
          circleElement.classList.remove('active')
          crossElement.classList.add('active')
        } else {
          crossElement.classList.remove('active')
          circleElement.classList.add('active')
        }
        context.isCircleTurnNow = !isCircleTurnNow
      }    

    onClickCell(e) {
    const index = e.target.getAttribute('data-key')
    const context = this.state;
    const { isCircleTurnNow, cells, progress } = context
    if (cells[index-1] || !progress) {
      return
    }
    const char = isCircleTurnNow ? '○' : '×'
    cells[index-1] = char
    e.target.innerText = char
    context.handCount++
    // checkResult()
    // toggleTurn()
    }

    render() {

        return (
            <div>
            <table>
                <tr>
                    <td className="cell" data-key="1" onClick={this.onClickCell}></td>
                    <td className="cell" data-key="2" onClick={this.onClickCell}></td>
                    <td className="cell" data-key="3" onClick={this.onClickCell}></td>
                </tr>
                <tr>
                    <td className="cell" data-key="4" onClick={this.onClickCell}></td>
                    <td className="cell" data-key="5" onClick={this.onClickCell}></td>
                    <td className="cell" data-key="6" onClick={this.onClickCell}></td>
                </tr>
                <tr>
                    <td className="cell" data-key="7" onClick={this.onClickCell}></td>
                    <td className="cell" data-key="8" onClick={this.onClickCell}></td>
                    <td className="cell" data-key="9" onClick={this.onClickCell}></td>
                </tr>
            </table>

            <div className="Btn">
            <h3 className="msg">starting...</h3>
            <Button onClick={this.onResetBtn}>RESTART</Button>
            </div>
            

        </div>
        )
    }
}


export default Main;