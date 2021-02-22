import React from 'react'
import { options } from '../../utills/options'
import './index.css'
interface CellProps {
    class: string;
    number: number;
    swap: any;
}

export const Cell: React.FC<CellProps> = (props): React.ReactElement => {
    return (
        <div className={`cell ${props.class} ${options.style}`} onClick={() => props.swap(props.class, props.number)}>
            <div className={`number ${options.style}`}>{ props.number }</div>
        </div>
    )
}