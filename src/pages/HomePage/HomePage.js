import {UserCard} from "../../components/UserCard/userCard";
import {useEffect, useState} from 'react'
import {UsersContext} from "../../context/UsersContext/UsersContext";
import {useContext} from 'react'
import {Link, Redirect} from "react-router-dom";

const HomePage = () => {
    const [page, setPage] = useState(1)

    const {users, setUsers} = useContext(UsersContext)

    return(
        <div>
            {console.log(users)}
            <Link to={'/users'}>Users</Link>
        </div>
    )
}

export default HomePage