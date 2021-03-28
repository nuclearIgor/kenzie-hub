import {Switch} from 'react-router-dom'
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {RegisterPage} from "../pages/RegisterPage/RegisterPage";
import {UsersPage} from "../pages/UsersPage/UsersPage";
import HomePage from "../pages/HomePage/HomePage";
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {UserProfile} from "../pages/UserProfile/UserProfile";

export const Routes = () => {
    return(
    <>
        <Switch>
        <PublicRoute exact path='/' component={LandingPage} restricted={true}/>
        <PublicRoute exact path='/register' component={RegisterPage} restricted={true}/>
        <PublicRoute exact path='/login' component={LoginPage} restricted={true}/>
        <PrivateRoute exact path='/home' component={HomePage}/>
        <PrivateRoute exact path='/users' component={UsersPage}/>
        <PrivateRoute exact path={'/:id'}  component={UserProfile}/>
        </Switch>
    </>
    )
}