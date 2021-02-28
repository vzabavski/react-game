import React from 'react'
import { formatTime } from '../../utills/game';
import { options } from '../../utills/options';
import './index.css'

export const Time: React.FC = (props): React.ReactElement => {
    const [time, setTime] = React.useState(localStorage.getItem('time') ? +String(localStorage.getItem('time')) : 0);
    const [timerOn, setTimerOn] = React.useState(false);
    const hanldeStart = () => {
        setTimerOn(true)
        console.log('work')
        //@ts-ignore
        document.querySelector('.gamefield-wrapper').removeEventListener('click', hanldeStart)
    }
    React.useEffect(() => {
        setTimerOn(false)
    }, [options.win])
   
    React.useEffect(() => {
        let interval:any = null;
        //@ts-ignore
        document.querySelector('.gamefield-wrapper').addEventListener('click', hanldeStart)
        if (timerOn) {
            interval = setInterval(() => {
            setTime((prevTime) => {
                localStorage.setItem('time', String(prevTime + 1))
                options.time = prevTime + 1
                return prevTime + 1  
            });
            
            }, 1000);
        } else if (!timerOn) {
            clearInterval(interval);
        }
        
      return () => {
            clearInterval(interval);
        };
    }, [timerOn]);
       
    return (
        <div className={`time ${options.style} ${options.visibility}`}>
            <h3>{`Time: ${formatTime(time)}`}</h3>
            <button className={`controls-btn ${options.style}`} onClick={() => setTimerOn(!timerOn)}>{timerOn ? 'Pause' : 'Play'}</button>
        </div>

    )
}

