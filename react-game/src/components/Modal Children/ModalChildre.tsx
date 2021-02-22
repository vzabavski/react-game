import React, { useState } from 'react'
import { options } from '../../utills/options'
import './index.css'



export const Settings: React.FC = (props): React.ReactElement => {
   return (
        <div>
            <h3>Mute sounds</h3>
            <h3>Mute music</h3>
        </div>
   )
}

export const Win: React.FC = (props): React.ReactElement => {
    return (
         <div>
             <h2>Congradulations!</h2>
             <h3>{`Your time: ${options.time}`}</h3>
             <h3>{`Steps: ${options.steps + 1}`}</h3>
         </div>
    )
 }

export const Options: React.FC = (props): React.ReactElement => {
    const [style, setStyle] = useState(options.style)
    const [size, setSize] = useState(options.size)
    const [vis, setVis] = useState(options.visibility)
    
    const handleStyleChange = (e: any) => {
        setStyle(e.target.value);
        options.style = e.target.value
    }
    const handleSizeChange = (e: any) => {
        setSize(e.target.value);
        options.size = e.target.value
        localStorage.clear()
    }
    const handleVisChange = (e: any) => {
        setVis(e.target.value);
        options.visibility = e.target.value
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