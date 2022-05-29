import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../..';
import { fetchOneUser } from '../../../http/userAPI';
import { QuizParams } from '../../../types/Params';
import './ProfileHeader.css'

const ProfileHeader = observer(() => {
    const {user} = useContext(Context)
    let {id} = useParams<QuizParams>();

    useEffect(() => {
        fetchOneUser(id).then(res => user.setUser(res))
    }, [])

    return (
        <>
            <div className="profile__user-name border"> 
                <h1>{user.user?.username}</h1>
            </div>
            <div className="profile__name border user-info"> 
                <p>
                    {user.user?.name}
                </p>
            </div>
            <div className="profile__email border user-info"> 
                <p>
                    {user.user?.email}
                </p>
            </div>
            <div className="profile__phone border user-info"> 
                <p>
                    {user.user?.phone}
                </p>
            </div>
            <div className="profile__website border user-info"> 
                <p>
                    {user.user?.website}
                </p>
            </div>
            <div className="profile__company border user-info"> 
                <p>
                    {user.user?.company.name}, {user.user?.company.bs}
                </p>
            </div>
            <div className="div10"/> 
            <div className="div11"/> 
            <div className="div12"/> 
            <div className="div13"/> 
        </>
    )
})

export default ProfileHeader