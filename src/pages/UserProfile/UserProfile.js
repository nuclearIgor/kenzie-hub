import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";

export const UserProfile = () => {
    const id = useParams()

    const [user, setUser] = useState([])

    useEffect(()=>{
        async function fetchUser(){
          const userData = await axios.get(`https://kenziehub.me/users/${id.id}`)
            setUser(userData.data)
            return userData
        }
        fetchUser()
    },[])

    return(
    <div>
        {console.log(user)}
        <h1>{user.name}</h1>
        <h1>{user.course_module}</h1>
        <h1>{user.bio}</h1>
        <h1>{user.email}</h1>
    </div>
    )
}