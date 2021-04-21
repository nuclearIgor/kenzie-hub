import {createContext, useState, useContext} from 'react'

export const UsersContext = createContext({})

export const UsersProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)


    return(
        <UsersContext.Provider value={{users, setUsers, page, setPage}}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsers = () => {
    const {users, setUsers} = useContext(UsersContext)
    return {users, setUsers}
}