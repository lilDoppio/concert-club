import axios from "axios"
import { IComment } from "../components/models/Comment"

export const fetchPostComments = async (postId: string) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
    return res.data
}

export const sendPostComment = async (comment: IComment) => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/comments', comment)
        return 'Message successfully send'
    } catch(e) {
        return e
    }
}