import Reat from 'react'
import './index.css'

export const Footer: React.FC = (props): React.ReactElement => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-title'><a href='https://github.com/vzabavski' target='_blanck'>Vitaly Zabavski</a></div>
            <div className='footer-logo'><a href='https://rs.school/' target='_blanck'><img src='https://rs.school/images/rs_school_js.svg' alt='logo' width='100px' height='50px'/></a></div>
            <div className='footer-year'><h4>2021</h4></div>
        </div>
    )
}