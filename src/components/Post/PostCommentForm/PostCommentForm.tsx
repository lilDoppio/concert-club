import { FC, useState } from "react"
import { sendPostComment } from "../../../http/commentAPI";
import Button from "../../UI/Button/Button"
import './PostCommentForm.css'

interface PostCommentFormProps {
    changeForm: (boolean: boolean) => void;
}

const PostCommentForm : FC<PostCommentFormProps>= ({changeForm}) => {
    const [commentBody, setCommentBody] = useState('')
    const [commentEmail, setCommentEmail] = useState('')
    const [commentName, setCommentName] = useState('')
    const [error, setError] = useState('')

    const createComment = (e: any) => {
        e.preventDefault()
        if (commentBody && commentEmail && commentName) {
            const newComment = {
                name: commentName,
                body: commentBody,
                email: commentEmail
            }
            sendPostComment(newComment).then(res => console.log(res))
            setCommentBody('')
            setCommentEmail('')
            setCommentName('')
            changeForm(false)
            setError('')
        } else {
            setError('Заполните все поля ввода')
        }
    }

    return (
        <div className='comment-section__user-comment'>
            <form className='comment-form'>
                <textarea 
                    className="comment-section__input user-comment" 
                    id="userComment"
                    placeholder='Введите текст...'
                    value={commentBody}
                    onChange={e => setCommentBody(e.target.value)}
                />
                <div className='comment-section__after-comment'>
                    <input 
                        className="comment-section__input"
                        type="text" 
                        placeholder='Введите имя...'
                        value={commentName}
                        onChange={e => setCommentName(e.target.value)}
                    />
                    <input 
                        className="comment-section__input"
                        type="text" 
                        placeholder='Введите почту...'
                        value={commentEmail}
                        onChange={e => setCommentEmail(e.target.value)}
                    />
                    <div className='comment-section__button'>
                        <Button onClick={() => changeForm(false)}>Закрыть</Button>
                        <Button onClickArg={e => createComment(e)}>Отправить</Button>
                    </div>
                </div>
                {error && <h3 className="comment-section__error">{error}</h3>}
            </form>
        </div>
    )
}

export default PostCommentForm