import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputRange from 'react-input-range';
import { cleanLocalStorage, formatTime } from '../../utills/game'
import { options } from '../../utills/options'
import './index.css'
import Select from '@material-ui/core/Select/Select';
import { InputLabel, MenuItem } from '@material-ui/core';




export const Settings: React.FC = (): React.ReactElement => {
   
    const [volume, setVolume] = useState(options.music_volume)
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
            <div className='settings_wrapper'>
                    <div>
                        <label>Volume: 
                            <input 
                                id="typeinp" 
                                type="range" 
                                min="0" max="1" 
                                value={volume} 
                                onChange={handleVolumeChange}
                                step="0.1"/>
                        </label>
                    </div>
                    <div>
                        <label>Sounds: 
                        <input 
                                id="typeinp" 
                                type="range" 
                                min="0" max="1" 
                                value={sound} 
                                onChange={handleSoundChange}
                                step="0.1"/>
                        </label>
                    </div>
            </div>
                
        )
    
}

export const Win: React.FC = (props): React.ReactElement => {
    return (
         <div className='win'>
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
        <div className='options'>
            <div className='options_block'>
                <InputLabel id="style" className="select-label">Style: </InputLabel>
                <Select labelId="style" id="select" value={style} onChange={handleStyleChange} >
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="asian">Asian vibe</MenuItem>
                    <MenuItem value="synt">Synt-wave</MenuItem>
                </Select>
            </div>
            <div className='options_block'>
                <InputLabel id="size" className="select-label">Size: </InputLabel>
                <Select labelId="size" id="select" value={size} onChange={handleSizeChange} >
                    <MenuItem value={9}>3X3</MenuItem>
                    <MenuItem value={16}>4X4</MenuItem>
                </Select>
            </div>
            <div className='options_block'>
                <InputLabel id="vis" className="select-label">Hide stats: </InputLabel>
                <Select labelId="vis" id="select" value={vis} onChange={handleVisChange} >
                    <MenuItem value=''>Show</MenuItem>
                    <MenuItem value='invisible'>Hide</MenuItem>
                </Select>
            </div>
        </div>
    )
}