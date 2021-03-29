import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../context/AuthContext/AuthContext";
import {useContext} from 'react'

export const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuth} = useContext(AuthContext)

    return(
        <Route {...rest} render={props => (
            isAuth ?
            <Component {...props}/>
        :   <Redirect to='/'/>
        )}/>
    )
}