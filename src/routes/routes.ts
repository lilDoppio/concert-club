import { IRoute } from "../components/models/Route";
import PostPage from "../pages/PostPage/PostPage";
import PostsListPage from "../pages/PostsListPage/PostsListPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import UsersListPage from "../pages/UsersListPage/UsersListPage";
import { POSTS_LIST_ROUTE, POST_ROUTE, PROFILE_ROUTE, USERS_LIST_ROUTE } from "../utils/constants";


export const publicRoutes: IRoute[] = [
    {
        path: USERS_LIST_ROUTE,
        Component: UsersListPage
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    },
    {
        path: POST_ROUTE,
        Component: PostPage
    },
    {
        path: POSTS_LIST_ROUTE,
        Component: PostsListPage
    }
]