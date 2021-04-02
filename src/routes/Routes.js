import {Switch} from 'react-router-dom'
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {UsersPage} from "../pages/UsersPage/UsersPage";
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {UserProfile} from "../pages/UserProfile/UserProfile";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthContext/AuthContext";
import {PersonalProfile} from "../pages/PersonalProfile/PersonalProfile";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const Routes = () => {

    return(
    <>
        <Switch>
        <PublicRoute exact path='/' component={LandingPage} restricted={true}/>
        <PublicRoute exact path='/register' component={RegisterPage} restricted={true}/>
        <PrivateRoute exact path='/home' component={UsersPage}/>
            <PrivateRoute exact path={'/profile'} component={PersonalProfile}/>
            <PrivateRoute exact path={'/:id'}  component={UserProfile}/>
        </Switch>
    </>
    )
}