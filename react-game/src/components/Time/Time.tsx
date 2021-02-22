import React, { useEffect, useRef, useState } from 'react'
import { options } from '../../utills/options';
import './index.css'

export const Time: React.FC = (props): React.ReactElement => {
    const [timer, setTimer] = useState(6908);
    const countRef = useRef(null);
    const formatTime = () => {
        const getSec = `0${timer % 60}`
        const min = Math.floor(timer / 60);
        const getMin = `0${min % 60}`.slice(-2)
        const hour = Math.floor(min / 60);
        const getHour = `0${hour % 60}`.slice(-2)
        return `${getHour}:${getMin}:${getSec}`
    }
        /*
        //@ts-ignore
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
            console.log(timer)
          }, 2000)
    
          */
    return (
        <div className={`time ${options.style} ${options.visibility}`}>
            <h3>{`Time: ${formatTime()}`}</h3>
        </div>
    )
}

