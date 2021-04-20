import { UserCard } from "./components/UserCard/userCard";
import {LoginForm} from "./components/Forms/LoginForm/LoginForm";
import {Routes} from "./routes/Routes";
import {useContext, useEffect} from "react";
import {AuthContext} from "./context/AuthContext/AuthContext";
import {NavBar} from "./components/NavBar/NavBar";

export const App = () => {
    const {isAuth, setIsAuth, setToken} = useContext(AuthContext)

    useEffect(()=>{
        const sessionToken = localStorage.getItem('token') || ''
        setToken(sessionToken)

        sessionToken && setIsAuth(true)
    },[])


  return (
    <div>
        {isAuth && <NavBar/>}
        <Routes/>
    </div>
  );
};
