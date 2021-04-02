import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import axios from "axios";

export const PersonalProfile = () => {
    const {userId} = useContext(AuthContext)
    const [user, setUser] = useState([])


    useEffect(()=>{
        console.log(userId)
        async function fetchUser(){
            const userData = await axios.get(`https://kenziehub.me/users/${userId}`)
        console.log(userData)
            setUser(userData.data)
            return userData
        }
        fetchUser()
    },[])


    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
};