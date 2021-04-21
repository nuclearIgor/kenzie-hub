import {createContext, useState} from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [token, setToken] = useState('')


    return(
        <AuthContext.Provider value={{token, setToken, isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}