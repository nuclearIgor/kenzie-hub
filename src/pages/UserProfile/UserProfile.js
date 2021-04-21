import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './UserProfile.module.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {TechsDisplay} from "../../components/TechsDisplay/TechsDisplay";
import WorksDisplay from "../../components/WorksDisplay/WorksDisplay";
import moment from "moment";

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
        <div className={styles.headerLeft}>
         {user.avatar_url? <img src={`${user.avatar_url}`}/> : <AccountBoxIcon/>}
        <h1>{user.name}</h1>
        </div>
         <div className={styles.headerRight}>
             <p>Membro desde {moment(user.created_at).format("MMM D, YYYY")}</p>
             <p>Contato: {user.contact}</p>
             <p>Modulo do curso: {user.course_module}</p>
         </div>
     </div>

        <p>Ultima atualização: {moment(user.updated_at).format("MMM D, YYYY")}</p>
        <h4>bio</h4>
        <p>{user.bio}</p>

    <div className={styles.cardsSection}>

        <div className={styles.techs}>
            {!!user.techs && user.techs.length > 0 ? (
                user.techs.map((item, index) => <TechsDisplay key={index} isOwner={false} item={item}/>)
            ) : (<p>Este usuário ainda não possui techs</p>)}

        </div>
        <div className={styles.works}>
            {!!user.works && user.works.length > 0 ? (
                user.works.map((item, index) => <WorksDisplay key={index} isOwner={false} item={item}/>)
            ) : (
                <p>Este usuário ainda não possui works</p>
            )
            }
        </div>
    </div>

    </div>
    )
}