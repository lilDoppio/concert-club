import {makeAutoObservable} from "mobx";
import { IComment } from "../components/models/Comment";

export default class PostStore {
    _postComments: IComment[] | null

    constructor() {
        this._postComments = []
        makeAutoObservable(this)
    }

    setPostComments(postComments: IComment[]) {
        this._postComments = postComments
    }

    get postComments() {
        return this._postComments
    }
}