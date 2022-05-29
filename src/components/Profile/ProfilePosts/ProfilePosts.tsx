import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../..'
import { fetchUserLastPosts, fetchUserPosts } from '../../../http/postAPI'
import { QuizParams } from '../../../types/Params'
import ProfileAllPosts from './ProfileAllPosts/ProfileAllPosts'
import ProfileLastPosts from './ProfileLastPosts/ProfileLastPosts'
import './ProfilePosts.css'

const ProfilePosts = observer(() => {
    const {post} = useContext(Context)
    let {id} = useParams<QuizParams>();

    useEffect(() => {
        fetchUserPosts(id).then(res => post.setUserPosts(res))
        fetchUserLastPosts(id).then(res => post.setUserLastPosts(res))
    }, [])

    return (
        <>
            <div className="profile__last-posts"> 
                <h1 className='profile__last-posts-title'>Последние публикации</h1>
                <div className='profile__last-posts-list'>
                    {post.userLastPosts?.map(post => {
                        return <ProfileLastPosts key={post.id} post={post}/>
                    })}
                </div>
            </div>
            <div className="profile__all-posts"> 
                <h1 className='profile__all-posts-title'>Все публикации</h1>
                <div className='profile__all-posts-list'>
                    {post.userPosts?.map(post => {
                        return <ProfileAllPosts key={post.id} post={post}/>
                    })}
                </div>
            </div>
        </>
    )
})

export default ProfilePosts