import { FC } from 'react'
import { useHistory } from 'react-router-dom';
import { IPost } from '../../../models/Post';
import Button from '../../../UI/Button/Button';
import './ProfileLastPosts.css'

interface ProfileLastPostsProps {
    post: IPost;
}

const ProfileLastPosts: FC<ProfileLastPostsProps> = ({post}) => {
    const history = useHistory()

    return (
        <div className='profile__last-posts-item border'>
            <div>
                <h3 className='post-title'>{post.title}</h3>
                <p className='post-body'>{post.body}</p>
            </div>
            <div className='post-button'>
                <Button onClick={() => history.push('/post/' + post.id)}>Открыть</Button>
            </div>
        </div>
    )
}

export default ProfileLastPosts