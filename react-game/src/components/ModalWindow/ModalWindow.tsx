import React from 'react'
import './index.css'

interface WindowProps {
    visibility: string;
    onClose: () => void
}

export const ModalWindow: React.FC<WindowProps> = (props): React.ReactElement => {
    return (
        <div className={`modal ${props.visibility}`}>
            <div className='button_wrapper'><button className='close' onClick={props.onClose}><img src='../../assets/close.png' alt='close'/></button></div>
            {props.children}
        </div>
    )
}