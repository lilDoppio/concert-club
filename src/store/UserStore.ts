import {makeAutoObservable} from "mobx";
import { IUser } from "../components/models/User";

export default class UserStore {
    _users: IUser[] | null;
    _user: IUser | null;

    constructor() {
        this._users = []
        this._user = null
        makeAutoObservable(this)
    }

    setUsers(users: IUser[]) {
        this._users = users
    }
    setUser(user: IUser) {
        this._user = user
    }

    get users() {
        return this._users
    }
    get user() {
        return this._user
    }
}