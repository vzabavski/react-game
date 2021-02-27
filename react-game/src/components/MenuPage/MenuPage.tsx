import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { cleanLocalStorage, setMusicForGame, setSounOnClick } from '../../utills/game'
import { options } from '../../utills/options'
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
    const clearProcess = (e: any) => {
        if(e.target.datatype === 'continue') {
            music.pause()
        }
        cleanLocalStorage()
        music.pause()
    }
    const music = setMusicForGame()
    React.useEffect(() => {
        
        music.volume = options.music_volume
        music.play()
        if(options.music_volume === 0) {
            music.pause()
        }
        return () => music.pause()
    }, [options.music_volume])

    const sound = setSounOnClick()
    const playSound = React.useCallback(() => {
        sound.volume = options.sound_volume
        sound.play()
    }, [options.sound_volume])
     
    
    return (
        <div className='wrapper menu'>
            <div className='menu-wrapper' onClick={playSound}>
                <h1>15 Puzzle</h1>
                <ul className='menu-list'>
                    <li className='menu-list-item' key='1'><Link to='/game' onClick={clearProcess} >New Game</Link></li>
                    {localStorage.getItem('cells') &&(<li className='menu-list-item' key='2'><Link to='/game' datatype='continue' onClick={clearProcess}>Continue</Link></li>)}
                    <li className='menu-list-item' key='3' onClick={() => setSettingsVisibility('')}>Settings</li>
                    <li className='menu-list-item' key='4' onClick={() => setOptionsVisibility('')}>Options</li>
                    <li className='menu-list-item' key='5' onClick={() => setScoreVisibility('')}>Score</li>
                </ul>
            </div>
            <ModalWindow  visibility={settingsVisibility} children={<Settings/>} onClose={onClose} type='settings'/>
            <ModalWindow  visibility={optionsVisibility} children={<Options/>} onClose={onClose}/>
            <ModalWindow  visibility={scoreVisibility} children={<Score />} onClose={onClose}/>
        </div>
        
    ) 
}