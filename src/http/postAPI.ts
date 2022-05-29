import axios from "axios"

export const fetchOnePost = async (id: string) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?id=' + id)
    return res.data[0]
}

export const fetchAllPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
}

export const fetchUserPosts = async (userId: string) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    return res.data
}

export const fetchUserLastPosts = async (userId: string) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId + '&_limit=3')
    return res.data
}