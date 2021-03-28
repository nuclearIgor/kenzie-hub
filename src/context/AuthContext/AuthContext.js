import {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(true)
    const [token, setToken] = useState('')

    return(
        <AuthContext.Provider value={{token, setToken, isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}