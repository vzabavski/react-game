import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputRange from 'react-input-range';
import { cleanLocalStorage, formatTime } from '../../utills/game'
import { options } from '../../utills/options'
import './index.css'



export const Settings: React.FC = (): React.ReactElement => {
   
    const [volue, setVolume] = useState(options.music_volume)
    const [sound, setSound] = useState(options.sound_volume)
    const handleVolumeChange = (e:any) => {
        setVolume(+e.target.value);
        options.music_volume = +e.target.value
    }
    const handleSoundChange = (e:any) => {
        setSound(+e.target.value);
        options.sound_volume = +e.target.value
    }
    
        return (
            <>
                    <div>
                        <label>Volume: 
                            <select value={volue} onChange={handleVolumeChange}>
                                <option value={0}>0</option>
                                <option value={0.5}>0.5</option>
                                <option value={1}>1</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Sounds: 
                            <select value={sound} onChange={handleSoundChange}>
                                <option value={0}>0</option>
                                <option value={0.5}>0.5</option>
                                <option value={1}>1</option>
                            </select>
                        </label>
                    </div>
            </>
                
        )
    
}

export const Win: React.FC = (props): React.ReactElement => {
    return (
         <div>
             <h2>Congradulations!</h2>
             <h3>{`Your time: ${formatTime(options.time)}`}</h3>
             <h3>{`Steps: ${options.steps + 1}`}</h3>
             <h3><Link to='/'>Menu</Link></h3>
         </div>
    )
}

export const Score: React.FC = (props): React.ReactElement => {
     //@ts-ignore
    const nineCellsScore = options.score.filter(item => item['Size'] === 9)
     //@ts-ignore
    const sixteenCellsScore = options.score.filter(item => +item['Size'] === 16)
    const createScoreList = (score: Array<object>) => {
        if(score.length < 10) {
        
            return score.map((item: object, idx: number) => {
                //@ts-ignore
                return (<li key={idx + 1}>{`Time: ${formatTime(item['Time'])}  Steps: ${item['Steps']}`}</li>)
            })
        } else {
            return score.slice(-10).map((item: object, idx: number) => {
                //@ts-ignore
                return (<li key={idx + 1}>{`Time: ${formatTime(item['Time'])}  Steps: ${item['Steps']}`}</li>)
            })
        }
    }
    return (
        <>
            <div>
                <h3>9 cells field:</h3>
                <ul>
                    {createScoreList(nineCellsScore)}
                </ul>
            </div>
            <div>
                <h3>16 cells field:</h3>
                <ul>
                    {createScoreList(sixteenCellsScore)}
                </ul>
            </div>
        </>
         
    )
}

export const Options: React.FC = (props): React.ReactElement => {
    const [style, setStyle] = useState(options.style)
    const [size, setSize] = useState(options.size)
    const [vis, setVis] = useState(options.visibility)
    
    const handleStyleChange = (e: any) => {
        const style = e.target.value
        setStyle(style);
        options.style = style
        localStorage.setItem('style', style)
    }
    const handleSizeChange = (e: any) => {
        const size = +e.target.value
        setSize(size);
        options.size = size;
        options.sizeClass = +size === 16 ? 'sixteen-cells' : 'nine-cells';
        options.emptyPosition = +size === 16 ? 'p' : 'i'
        localStorage.setItem('size', String(size))
        localStorage.setItem('sizeClass', options.sizeClass)
        localStorage.setItem('position', options.emptyPosition)
        cleanLocalStorage()
    }
    const handleVisChange = (e: any) => {
        const visibility = e.target.value
        setVis(visibility);
        options.visibility = visibility
        localStorage.setItem('visibility', visibility)
    }

    return (
        <div>
            <div className='options_block'>
                <h3>Style: </h3>
                <select value={style} onChange={handleStyleChange}>
                    <option value="default">Default</option>
                    <option value="asian">Asian vibe</option>
                    <option value="synt">Synt-wave</option>
                </select>
            </div>
            <div className='options_block'>
                <h3>Size: </h3>
                <select value={size} onChange={handleSizeChange}>
                    <option value={9}>3X3</option>
                    <option value={16}>4X4</option>
                </select>
            </div>
            <div className='options_block'>
                <h3>Hide stats: </h3>
                <select value={vis} onChange={handleVisChange}>
                    <option value=''>Show</option>
                    <option value='invisible'>Hide</option>
                </select>
            </div>
        </div>
    )
}