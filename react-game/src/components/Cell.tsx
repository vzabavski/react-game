import React from 'react'

interface CellProps {
    class: string;
    number: number;
    swap: any
}

export const Cell: React.FC<CellProps> = (props): React.ReactElement => {
    return (
        <div className={'cell synt ' + props.class} onClick={() => props.swap(props.class, props.number)}>
            <div className='number asian'>{ props.number }</div>
        </div>
    )
}