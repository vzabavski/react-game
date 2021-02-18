import React from 'react'


export const Time: React.FC = (props): React.ReactElement => {
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
    const [hours, setHours] = React.useState(0);

    const addZero = (n: string) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n
    }
    const tick = () => {
        //const currentMinute = minutes;
        //const currentSecond = seconds;
        //const currentHour = hours    
        setSeconds(seconds + 1);
        if (seconds >= 60) { 
            setMinutes(minutes + 1);
            setSeconds(0);
        }
        if (minutes >= 60) {
            setHours(hours + 1);
            setMinutes(0);
        }
        console.log(hours, minutes, seconds)
    }
    //let intervalId = 
    React.useEffect(() => {
        
        //return () => clearInterval(intervalId)
        
    }, [])
    
    
    return (
        <div className='time asian'>
            <h3>{`Time:  ${hours}`}<span>:</span>{addZero(String(minutes))}<span>:</span>{addZero(String(seconds))}</h3>
        </div>
    )
}

