import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../..'
import Button from '../../components/UI/Button/Button'
import './UsersListPage.css'

const UsersListPage = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    return (
        <div className='users-list-container'>
            {user.users?.map(user => {
                return <div key={user.id} className='user-card'>
                    <div>
                        <h2>Имя пользователья: {user.name}</h2>
                        <h4>Псевдоним пользователя: {user.username}</h4>
                    </div>
                    <Button
                        onClick={() => history.push('/users/' + user.id)}
                    >
                        Перейти в профиль
                    </Button>
                </div>
            })}
        </div>
    )
})

export default UsersListPage