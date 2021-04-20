import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import axios from "axios";
import jwtDecode from "jwt-decode";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {WorksForm} from "../../components/Forms/WorksForm/WorksForm";
import {TechsForm} from "../../components/Forms/TechsForm/TechsForm";
import styles from './PersonalProfile.module.css'
import moment from "moment";

export const PersonalProfile = () => {
    const {token, userId} = useContext(AuthContext)
    const [user, setUser] = useState([])

    useEffect(()=>{
        // const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        // console.log(decodedToken)
        async function fetchUser(){
            const userData = await axios.get(`https://kenziehub.me/users/${decodedToken.sub}`)
        console.log(userData)
            setUser(userData.data)
            return userData
        }
        fetchUser()
    },[])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.profileHeader}>
                <div className={styles.headerLeft}>
                {user.avatar_url? <img src={`${user.avatar_url}`}/> : <AccountBoxIcon/>}
                    <h1>{user.name}</h1>
                </div>
                <div className={styles.headerRight}>
                    <p>Membro desde {moment(user.created_at).format("MMM D, YYYY")}</p>
                   <p>{user.contact}</p>
                   <p>{user.course_module}</p>
               </div>
            </div>
            <p>{user.bio}</p>
            {/*<p>{user.updated_at}</p>*/}
            {/*<p>{user.techs}</p>*/}
            {/*<p>{user.works}</p>*/}

            {/*<WorksForm/>*/}
            {/*<TechsForm/>*/}

        </div>
    );
};