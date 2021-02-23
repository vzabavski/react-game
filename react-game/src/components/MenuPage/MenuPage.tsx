import React from 'react'
import { Link } from 'react-router-dom'
import { cleanLocalStorage } from '../../utills/game'
import { Options, Settings } from '../Modal Children/ModalChildre'
import { ModalWindow } from '../ModalWindow/ModalWindow'
import './index.css'

export const Menu: React.FC = (props): React.ReactElement => {
    let [optionsVisibility, setOptionsVisibility] = React.useState('empty')
    let [settingsVisibility, setSettingsVisibility] = React.useState('empty')
    const onClose = () => {
        setOptionsVisibility('empty')
        setSettingsVisibility('empty')
    }
    
    
    return (
        <div className='wrapper menu'>
            <div className='menu-wrapper'>
                <h1>15 Puzzle</h1>
                <ul className='menu-list'>
                    <li className='menu-list-item' key='1'><Link to='/game' onClick={cleanLocalStorage}>New Game</Link></li>
                    {localStorage.getItem('cells') &&(<li className='menu-list-item' key='2'><Link to='/game'>Continue</Link></li>)}
                    <li className='menu-list-item' key='3'  onClick={() => setSettingsVisibility('')}>Settings</li>
                    <li className='menu-list-item' key='4' onClick={() => setOptionsVisibility('')}>Options</li>
                    <li className='menu-list-item' key='5'>Score</li>
                </ul>
            </div>
            <ModalWindow  visibility={settingsVisibility} children={<Settings/>} onClose={onClose}/>
            <ModalWindow  visibility={optionsVisibility} children={<Options/>} onClose={onClose}/>
        </div>
        
    ) 
}