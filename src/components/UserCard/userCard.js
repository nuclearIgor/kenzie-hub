import styles from "./userCard.module.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";
import moment from 'moment'

export const UserCard = (props) => {
    const {user} = props

  return (
    <div className={styles.cardContainer}>
        {user.avatar_url?
        <img src={`${user.avatar_url}`} />
       : <AccountBoxIcon/>
        }

        <div className={styles.cardInfo}>
        <h3>{user.name}</h3>
            <p>{user.course_module}</p>
            <p>Membro desde {moment(user.created_at).format("MMM D, YYYY")}</p>
            <Link to={`/${user.id}`}>visitar perfil <PersonIcon/></Link>
      </div>
    </div>

  );
};
