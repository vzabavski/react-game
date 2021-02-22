import React, { useEffect } from 'react'
import { options } from '../../utills/options'
import './index.css'
interface CounterProps {
    steps: number;
}

export const Counter: React.FC<CounterProps> = (props): React.ReactElement => {
    options.steps = props.steps;
    return (
        <div className={`counter ${options.style} ${options.visibility}`}>
            <h5>{`Steps: ${props.steps}`}</h5>
        </div>
    )
}
