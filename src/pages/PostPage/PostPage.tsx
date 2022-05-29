import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import { fetchPostComments } from '../../http/commentAPI';
import { fetchOnePost } from '../../http/postAPI';
import { QuizParams } from '../../types/Params';
import Button from '../../components/UI/Button/Button';
import PostCommentForm from '../../components/Post/PostCommentForm/PostCommentForm';
import PostCommentSwiper from '../../components/Post/PostCommentSwiper/PostCommentSwiper'
import './PostPage.css'

const PostPage = observer(() => {
    let {id} = useParams<QuizParams>();
    const {post, comment} = useContext(Context)
    const [isCommentForm, setIsCommentForm] = useState<boolean>(false)

    useEffect(() => {
        fetchOnePost(id).then(res => post.setPost(res))
        fetchPostComments(id).then(res => comment.setPostComments(res))
    }, [])

    const changeForm = (boolean: boolean) => {
        setIsCommentForm(boolean)
    }

    return (
        <div className='post-container'>
            <div className='current-post'>
                <h2 className='current-post-title'>{post.post?.title}</h2>
                <p className='current-post-body'>{post.post?.body}</p>
            </div>
            <div className='comments-section'>
                <h2>Коментарии</h2>
                <PostCommentSwiper/>
                {!isCommentForm &&
                <div className='comment-section__button'>
                    <Button onClick={() => changeForm(true)}>Оставить коментарий</Button>
                </div>}
                {isCommentForm 
                && 
                <PostCommentForm changeForm={changeForm}/>}
            </div>
        </div>
    )
})

export default PostPage