import { Redirect, Route, Switch } from 'react-router-dom'
import { USERS_LIST_ROUTE } from '../utils/constants'
import { publicRoutes } from '../routes/routes'

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} component={Component} exact/>
            })}
            <Redirect to={USERS_LIST_ROUTE}/>
        </Switch>
    )
}

export default AppRouter