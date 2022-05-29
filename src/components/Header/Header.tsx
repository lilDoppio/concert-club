import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import './Header.css'

const Header: FC = () => {
    return (
        <div className='header'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1 className='header-title'>CONCERT CLUB</h1>
            </Link>
            
            <div>
                <Button>Версия для слабовидящих</Button>
                <Button>Мой профиль</Button>
            </div>
        </div>
    )
}

export default Header