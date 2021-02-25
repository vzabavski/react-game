import React from 'react'
import { Link } from 'react-router-dom'
import { cleanLocalStorage } from '../../utills/game'
import { Options, Score, Settings } from '../Modal Children/ModalChildre'
import { ModalWindow } from '../ModalWindow/ModalWindow'
import './index.css'

export const Menu: React.FC = (props): React.ReactElement => {
    let [optionsVisibility, setOptionsVisibility] = React.useState('empty')
    let [settingsVisibility, setSettingsVisibility] = React.useState('empty')
    let [scoreVisibility, setScoreVisibility] = React.useState('empty')
    const onClose = () => {
        setOptionsVisibility('empty')
        setSettingsVisibility('empty')
        setScoreVisibility('empty')
    }
    
    
    
    return (
        <div className='wrapper menu'>
            <div className='menu-wrapper'>
                <h1>15 Puzzle</h1>
                <ul className='menu-list'>
                    <li className='menu-list-item' key='1'onClick={cleanLocalStorage}>New Game</li>
                    {localStorage.getItem('cells') &&(<li className='menu-list-item' key='2'>Continue</li>)}
                    <li className='menu-list-item' key='3' onClick={() => setSettingsVisibility('')}>Settings</li>
                    <li className='menu-list-item' key='4' onClick={() => setOptionsVisibility('')}>Options</li>
                    <li className='menu-list-item' key='5' onClick={() => setScoreVisibility('')}>Score</li>
                </ul>
            </div>
            <ModalWindow  visibility={settingsVisibility} children={<Settings/>} onClose={onClose}/>
            <ModalWindow  visibility={optionsVisibility} children={<Options/>} onClose={onClose}/>
            <ModalWindow  visibility={scoreVisibility} children={<Score />} onClose={onClose}/>
        </div>
        
    ) 
}