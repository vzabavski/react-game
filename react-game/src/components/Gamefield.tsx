import React from 'react'
import { Cell } from './Cell'

export class Gamefield extends React.Component {
    
    state = {
        cells: Object.assign({0: 'p'}, ...this.createArray(4))
    }
    
    createArray(n: number) {
        const arr = []
        for (let i = 1; i < Math.pow(n, 2); i++) {
            arr.push({[i]: String.fromCharCode(i + 96)});
        }
        return arr
    }
    
    render() {
        
        const { cells } = this.state

        const isAcceptableToSwap = (from: string, to:string,  size:number):Boolean => {
            const left = to.charCodeAt(0) - 1;
            const right = to.charCodeAt(0) + 1;                         // export 
            const up = to.charCodeAt(0) - Math.sqrt(size);
            const down = to.charCodeAt(0) + Math.sqrt(size);
            const exapmle = from.charCodeAt(0);
            if(exapmle === left || 
                exapmle === right || 
                exapmle === up ||
                exapmle === down) {
                return true
            }
            return false
        }
        const swapPositions = (position: string, num: number) => {
            if(isAcceptableToSwap(cells[num],cells[0], Object.keys(cells).length)) {
                let buffer = cells[0];
                this.setState({
                    cells: {
                        ...cells,
                        0: position,
                        [num]: buffer
                    }
                })
            }
        }
        const creatCells = () => {
            const arr = []
            for (let cell in cells) {
                if(+cell === 0) {
                    arr.push(<Cell key={+cell} class={cells[cell] + ' empty'}  number={+cell}  swap={swapPositions}/>)
                } else {
                    arr.push(<Cell key={+cell} class={cells[cell]}  number={+cell}  swap={swapPositions}/>)
                }
            }
            return arr
        }
        return(
            <div className='gamefield-wrapper sixteen-cells' >
            { creatCells() }
        </div>
        )
    }
} 