import { FC } from 'react'
import { useHistory } from 'react-router-dom';
import { IPost } from '../../../models/Post';
import Button from '../../../UI/Button/Button';
import './ProfileAllPosts.css'

interface ProfileLastPostsProps {
    post: IPost;
}

const ProfileAllPosts: FC<ProfileLastPostsProps> = ({post}) => {
    const history = useHistory()

    return (
        <div className='profile__all-posts-item border'>
            <div className='post-block'>
                <h3 className='post-title'>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className='post-button'>
                <Button onClick={() => history.push('/post/' + post.id)}>Открыть</Button>
            </div>
        </div>
    )
}

export default ProfileAllPosts