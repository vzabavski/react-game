import React from 'react'
import './index.css'
//@ts-ignore
import closeI from '../../assets/close.svg'


interface WindowProps {
    visibility: string;
    onClose?: () => void;
    type?: string
}

export const ModalWindow: React.FC<WindowProps> = (props): React.ReactElement => {
    return (
        <div className={`modal ${props.visibility}`}>
            {props.type !== 'win' && <div className='button_wrapper'><button className='close' onClick={props.onClose}><img src={closeI} width='15px' height='15px' alt='close'/></button></div>}
            {props.children}
            {props.type === 'settings' && <button className='controls-btn' onClick={props.onClose}>Save</button>}
        </div>
    )
} 