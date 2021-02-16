import React from 'react'

interface CellProps {
    class: string;
    number: number;
    swap: any
}

export const Cell: React.FC<CellProps> = (props): React.ReactElement => {
    return (
        <div className={'cell ' + props.class} onClick={() => props.swap(props.class, props.number)}>
            <div className='number'>{ props.number }</div>
        </div>
    )
}