import axios from "axios";
import {useContext, useEffect} from 'react'
import {UsersContext} from "../../context/UsersContext/UsersContext";
import {UserCard} from "../../components/UserCard/userCard";

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
        <div>
            {users && users.map((item, index) =>
            <UserCard user={item} key={index}/>
            )}
        </div>
    )
}


// ()=>{
//     const fetchUsers = axios.get('https://kenziehub.me/users?perPage=15&page=1').then((response) => {
//         console.log(response)
//         return response.data
//     })
// }