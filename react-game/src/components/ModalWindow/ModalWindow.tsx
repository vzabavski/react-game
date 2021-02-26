import React from 'react'
import './index.css'
//@ts-ignore
import closeI from '../../assets/close.svg'


interface WindowProps {
    visibility: string;
    onClose: () => void
}

export const ModalWindow: React.FC<WindowProps> = (props): React.ReactElement => {
    return (
        <div className={`modal ${props.visibility}`}>
            <div className='button_wrapper'><button className='close' onClick={props.onClose}><img src={closeI} width='30px' height='30px' alt='close'/></button></div>
            {props.children}
        </div>
    )
} 