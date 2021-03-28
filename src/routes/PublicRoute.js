import {Redirect, Route} from "react-router-dom";
import {useContext} from 'react'
import {AuthContext} from "../context/AuthContext/AuthContext";

export const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const {isAuth} = useContext(AuthContext)
    return(
        <Route {...rest} render={props => (
            isAuth && restricted ?
        <Redirect to='/home'/>
        : <Component {...props}/>
        )}/>
    )
}