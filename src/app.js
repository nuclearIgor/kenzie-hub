import { UserCard } from "./components/UserCard/userCard";
import {LoginForm} from "./components/LoginForm/LoginForm";
import {Routes} from "./routes/Routes";
import {useContext, useEffect} from "react";
import {AuthContext} from "./context/AuthContext/AuthContext";
import {NavBar} from "./components/NavBar/NavBar";

export const App = () => {
    const {isAuth} = useContext(AuthContext)


    useEffect(()=>{
        console.log(isAuth)
    },[])

  return (
    <div>
        {isAuth && <NavBar/>}
        <Routes/>
    </div>
  );
};
