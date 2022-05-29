import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Context } from '../..'
import './PostsListPage.css'

const PostsListPage = observer(() => {
    const {post} = useContext(Context)

    return (
        <div className='posts-list-container'>
            <div className='post-card'>
                <h2>Пост: name</h2>
                <h4>Автор поста: surname</h4>
            </div>
        </div>
    )
})

export default PostsListPage