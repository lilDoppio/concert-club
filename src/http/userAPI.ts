import axios from "axios"

export const fetchAllUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
}

export const fetchOneUser = async (id: string) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
    return res.data
}