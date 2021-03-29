import {Switch} from 'react-router-dom'
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {UsersPage} from "../pages/UsersPage/UsersPage";
import HomePage from "../pages/HomePage/HomePage";
import {LandingPage} from "../pages/LandingPage/LandingPage";
import {UserProfile} from "../pages/UserProfile/UserProfile";

export const Routes = () => {
    return(
    <>
        <Switch>
        <PublicRoute exact path='/' component={LandingPage} restricted={true}/>
        <PrivateRoute exact path='/home' component={UsersPage}/>
        {/*<PrivateRoute exact path='/users' component={UsersPage}/>*/}
        <PrivateRoute exact path={'/:id'}  component={UserProfile}/>
        </Switch>
    </>
    )
}