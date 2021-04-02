import { UserCard } from "./components/UserCard/userCard";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {Routes} from "./routes/Routes";
import {useContext, useEffect} from "react";
import {AuthContext} from "./context/AuthContext/AuthContext";
import {NavBar} from "./components/NavBar/NavBar";

export const App = () => {
    const {isAuth, setIsAuth, token, setToken, userId} = useContext(AuthContext)

    useEffect(()=>{
        const sessionToken = localStorage.getItem('token') || ''
        setToken(sessionToken)
        console.log(userId)
        sessionToken && setIsAuth(true)
    },[])


  return (
    <div>
        {isAuth && <NavBar/>}
        <Routes/>
    </div>
  );
};
