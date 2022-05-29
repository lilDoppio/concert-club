import PostStore from "../../store/PostStore";
import UserStore from "../../store/UserStore";
import CommentStore from "../../store/CommentStore";

export interface IContextProvider {
    user: UserStore,
    post: PostStore,
    comment: CommentStore,
}