import axios from "axios";
import {useContext, useEffect} from 'react'
import {UsersContext} from "../../context/UsersContext/UsersContext";
import {UserCard} from "../../components/UserCard/userCard";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from './UsersPage.module.css'


export const UsersPage = ()=>{
    const {users, setUsers, page, setPage} = useContext(UsersContext)

    useEffect(()=>{
        async function fetchUsers () {
            const usersdata = await axios.get(`https://kenziehub.me/users?perPage=15&page=${page}`)
                setUsers(usersdata.data)
                return usersdata.data
        }
    fetchUsers()
    },[page])

    return (
    <div className={styles.pageContainer}>
        <div className={styles.userCards}>
            {users && users.map((item, index) =>
            <UserCard user={item} key={index}/>
            )}
        </div>
        <div className={styles.pageController}>
            <ArrowBackIcon  onClick={ () => page > 1 && setPage(page - 1)}/>
            <strong>página {page}</strong>
            <ArrowForwardIcon onClick={() => setPage(page + 1)}/>
        </div>
        </div>
    )
}

