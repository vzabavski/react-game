import React from 'react'

interface CounterProps {
    steps: number
}

export const Counter: React.FC<CounterProps> = (props): React.ReactElement => {
    return (
        <div className='counter asian'>
            <h5>{`Steps: ${props.steps}`}</h5>
        </div>
    )
}
