import React from 'react'
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
    const setStyle = (style: string) => {
        options.style = style
    }
    const setSize = (size: number) => {
        options.size = size
        localStorage.clear()
    }
    return (
        <div>
            <div className='options_block'>
                <h3>Style: </h3>
                <ul className='options-list'>
                    <li className='options-list-item' onClick={() => setStyle('default')}>Default</li>
                    <li className='options-list-item' onClick={() => setStyle('asian')}>Asian vibe</li>
                    <li className='options-list-item' onClick={() => setStyle('synt')}>Synt-wave</li>
                </ul>
            </div>
            <div className='options_block'>
                <h3>Size: </h3>
                <ul className='options-list'>
                    <li className='options-list-item' onClick={() => setSize(9)}>3X3</li>
                    <li className='options-list-item' onClick={() => setSize(16)}>4X4</li>
                </ul>
            </div>
            <h3>Hide stats</h3>
        </div>
    )
}