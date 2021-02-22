import React from 'react'
import './index.css'
import { checkForComposure, createArray, createCellsOrder, isAcceptableToSwap, setSizeStyle, setSounOnClick } from '../../utills/game';
import { Cell } from '../Cell/Cell'
import { ModalWindow }  from '../ModalWindow/ModalWindow'
import { options } from '../../utills/options';
import { Win } from '../Modal Children/ModalChildre';

export class Gamefield extends React.Component<{addStep: ()=> void}> {
    state = {
        cells: createCellsOrder(options.size),
        visibility: 'empty'
    }
    sound = setSounOnClick(options.style);
    correctOrderObject = createArray(options.size);
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
                const upCellPosition = String.fromCharCode(emptyPosition + Math.sqrt(options.size))
                const upCellNumber = Object.values(cells).indexOf(upCellPosition)
                this.swapPositions(upCellPosition, upCellNumber)
                break;
            case 115: 
                const downCellPosition = String.fromCharCode(emptyPosition - Math.sqrt(options.size))
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
        const movedCellPosition = this.state.cells[num];
        const emptyCellPosition = this.state.cells[0];
        const buffer = this.state.cells[0];
        const newCellsPosotions = {
            ...this.state.cells,
            0: position,
            [num]: buffer
        }
        if(true/*isAcceptableToSwap(movedCellPosition, emptyCellPosition, this.size)*/) {
             
            this.setState({
                cells: newCellsPosotions
            });
            this.props.addStep();
            
            localStorage.setItem('cells', JSON.stringify(newCellsPosotions))
            //this.sound.play();
            if(checkForComposure(newCellsPosotions, this.correctOrderObject)) {
                this.setState({
                    visibility: ''
                })
                options.win = true
                localStorage.clear()
            }
        }
    }

    render() {
        const { cells } = this.state
        const creatCells = () => {
            const arr = []                  // export
            for (let cell in cells) {
                if(+cell === 0) {
                    arr.push(<Cell key={+cell} class={`${cells[cell]} empty`}  number={+cell}  swap={this.swapPositions} />)
                } else {
                    arr.push(<Cell key={+cell} class={cells[cell]}  number={+cell}  swap={this.swapPositions} />)
                }
            }
            return arr
        }
        let sizeStyle = ''
        if (options.size === 16) {
            sizeStyle = 'sixteen-cells'
        } else {
            sizeStyle = 'nine-cells'
        }
        return(
            <>
                <div className={`gamefield-wrapper ${options.style} ${setSizeStyle()}`} >
                { creatCells() }
                </div>
                <ModalWindow visibility={this.state.visibility} children={<Win />} onClose={() => console.log('close')}/> 
            </>
            
        )
    }
} 