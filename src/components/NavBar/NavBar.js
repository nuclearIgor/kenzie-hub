import styles from './NavBar.module.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import {Link, useHistory} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const NavBar = () => {
    const history = useHistory()
    const {setIsAuth, setToken} = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.clear()
        setToken('')
        setIsAuth(false)
    }

    return(
    <div className={styles.navBarContainer}>
    <nav>
        <ul className={styles.navBarList}>
            <li><ArrowBackIcon onClick={() => history.push('/')}/></li>
            <li>
                <Link to={'/profile'}>meu perfil</Link>
                {/*<PersonOutlineIcon/>*/}

            </li>
            <li>
            <span>Sair</span>
            <ExitToAppIcon onClick={handleLogout}/></li>
        </ul>
    </nav>
    </div>
    )
}