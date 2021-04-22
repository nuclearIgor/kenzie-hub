import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import axios from "axios";
import jwtDecode from "jwt-decode";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import styles from './PersonalProfile.module.css'
import moment from "moment";
import {TechsDisplay} from "../../components/TechsDisplay/TechsDisplay";
import WorksDisplay from "../../components/WorksDisplay/WorksDisplay";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {TechsForm} from "../../components/Forms/TechsForm/TechsForm";
import {WorksForm} from "../../components/Forms/WorksForm/WorksForm";
import ModalComponent from "../../components/ModalComponent/ModalComponent";


export const PersonalProfile = () => {

    const {token, globalUser} = useContext(AuthContext)
    const [user, setUser] = useState({})
    const [newTech, setNewTech] = useState(false)
    const [newWork, setNewWork] = useState(false)

    
    useEffect(()=>{

        const decodedToken = jwtDecode(token)

        async function fetchUser(){
            const userData = await axios.get(`https://kenziehub.me/users/${decodedToken.sub}`)
        console.log(userData)
            setUser(userData.data)
            return userData
        }
        fetchUser()
    },[globalUser])

    return (
        <div className={styles.pageContainer}>
                <div className={styles.profileHeader}>
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


        <div className={styles.addButtons}>
            <div>
                <AddCircleIcon onClick={()=> setNewTech(true)}/>
                <p>New Tech</p>
                <ModalComponent handler={newTech} setHandler={()=>setNewTech()}>
                    <>
                        <TechsForm edit={false} handleClose={() => setNewTech(false)}/>
                    </>
                </ModalComponent>
            </div>

            <div>
                <AddCircleIcon onClick={()=>setNewWork(true)}/>
                <p>New Work</p>
                <ModalComponent handler={newWork} setHandler={()=>setNewWork()}>
                    <>
                        <WorksForm handleClose={()=>setNewWork(false)} edit={false}/>
                    </>
                </ModalComponent>
            </div>
        </div>

    <div className={styles.cardsSection}>
        <div>
    {!!user.techs && user.techs.length > 0 ?
        user.techs.map((item, index) => <TechsDisplay key={index} item={item} isOwner={true}/>
    )
     : <p>Você ainda não possui techs</p>}
        </div>
        <div>
    {!!user.works && user.works.length > 0 ?
        user.works.map((item, index) => <WorksDisplay key={index} item={item} isOwner={true}/>

    ) : <p>Você ainda não possui works</p>}
        </div>
    </div>
    </div>
    )
};