import {makeAutoObservable} from "mobx";
import { IPost } from "../components/models/Post";

export default class PostStore {
    _post: IPost | null
    _posts: IPost[] | null
    _userPosts: IPost[] | null
    _userLastPosts: IPost[] | null

    constructor() {
        this._post = null
        this._posts = []
        this._userPosts = []
        this._userLastPosts = []
        makeAutoObservable(this)
    }

    setPost(post: IPost) {
        this._post = post
    }
    setPosts(posts: IPost[]) {
        this._posts = posts
    }
    setUserPosts(userPosts: IPost[]) {
        this._userPosts = userPosts
    }
    setUserLastPosts(userLastPosts: IPost[]) {
        this._userLastPosts = userLastPosts
    }

    get post() {
        return this._post
    }get posts() {
        return this._posts
    }
    get userPosts() {
        return this._userPosts
    }
    get userLastPosts() {
        return this._userLastPosts
    }
}