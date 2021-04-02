import {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState('')
    const [userId, setUserId] = useState('')

    return(
        <AuthContext.Provider value={{token, setToken, isAuth, setIsAuth, userId, setUserId}}>
            {children}
        </AuthContext.Provider>
    )
}