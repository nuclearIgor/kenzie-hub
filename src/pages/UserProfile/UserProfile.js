import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './UserProfile.module.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {TechsDisplay} from "../../components/TechsDisplay/TechsDisplay";

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

    const {techs, works} = user

    return(
    <div className={styles.pageContainer}>

     <div className={styles.userHeader}>
         {user.avatar_url? <img src={`${user.avatar_url}`}/> : <AccountBoxIcon/>}
         <div>
             <h1>{user.name}</h1>
             <h5>{user.course_module}</h5>
             <h5>{user.contact}</h5>
         </div>
     </div>
        <p className={styles.userBio}>{user.bio}</p>
    <div className={styles.flexContainer}>
        <div className={styles.techs}>
           <TechsDisplay techs={user.techs}/>
        </div>
        <div className={styles.works}></div>
    </div>

    </div>
    )
}