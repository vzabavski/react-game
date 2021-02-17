import React from 'react'
import { createArray, isAcceptableToSwap } from '../utills/game';
import { Cell } from './Cell'

export class Gamefield extends React.Component {
    size = 9;
    state = {
        cells: Object.assign({0: String.fromCharCode(this.size + 96)}, ...createArray(this.size))
    }
    componentDidMount() {
        window.addEventListener('keypress', this.keyboardMoves);
    }
    componentWillUnmount() {
        window.removeEventListener('keypress', this.keyboardMoves);
    }
    keyboardMoves = (event:any) => {
        const keyCode = event.keyCode;
        const { cells } = this.state
        const emptyPosition = cells[0].charCodeAt(0)
        switch(keyCode) {
            case 119: 
                const upCellPosition = String.fromCharCode(emptyPosition + Math.sqrt(this.size))
                const upCellNumber = Object.values(cells).indexOf(upCellPosition)
                this.swapPositions(upCellPosition, upCellNumber)
                break;
            case 115: 
                const downCellPosition = String.fromCharCode(emptyPosition - Math.sqrt(this.size))
                const downCellNumber = Object.values(cells).indexOf(downCellPosition)
                this.swapPositions(downCellPosition, downCellNumber)
                break;
            case 97: 
                const leftCellPosition = String.fromCharCode(emptyPosition + 1)
                const leftCellNumber = Object.values(cells).indexOf(leftCellPosition)
                this.swapPositions(leftCellPosition, leftCellNumber)
                break;
            case 100: 
                const rightCellPosition = String.fromCharCode(emptyPosition - 1)
                const rightCellNumber = Object.values(cells).indexOf(rightCellPosition)
                this.swapPositions(rightCellPosition, rightCellNumber)
                break;
        }
    }
    
    swapPositions = (position: string, num: number) => {
        if(isAcceptableToSwap(this.state.cells[num],this.state.cells[0], Object.keys(this.state.cells).length)) {
            let buffer = this.state.cells[0];
            this.setState({
                cells: {
                    ...this.state.cells,
                    0: position,
                    [num]: buffer
                }
            })
        }
    }
    render() {
        const { cells } = this.state

        
         
        const creatCells = () => {
            const arr = []
            for (let cell in cells) {
                if(+cell === 0) {
                    arr.push(<Cell key={+cell} class={cells[cell] + ' empty'}  number={+cell}  swap={this.swapPositions}/>)
                } else {
                    arr.push(<Cell key={+cell} class={cells[cell]}  number={+cell}  swap={this.swapPositions}/>)
                }
            }
            return arr
        }
        return(
            <div className='gamefield-wrapper nine-cells' >
            { creatCells() }
        </div>
        )
    }
} 