import styles from './NavBar.module.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";

export const NavBar = () => {
    const {setIsAuth} = useContext(AuthContext)

    return(
    <div className={styles.navBarContainer}>
    <nav>
        <ul className={styles.navBarList}>
            {/*<li>Usuários</li>*/}
            <li>
                <span>Meu perfil</span>
                <PersonOutlineIcon/>
            </li>
            <li>
            <span>Sair</span>
            <ExitToAppIcon onClick={()=>{setIsAuth(false)}}/></li>
        </ul>
    </nav>
    </div>
    )
}