import styles from "./userCard.module.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";

const data = {
    id: "0136b882-9e14-4bd4-9431-53b7b6a5f817",
    name: "Luciano teste",
    email: "luciano@teste.com",
    course_module: "Segundo módulo (Frontend Avançado)",
    bio: "teste",
    contact: "teste",
    techs: [
        {
            id: "27ed5c05-6d2f-494d-ab3a-11beed6dad4f",
            title: "React",
            status: "Medium",
            created_at: "2021-02-23T00:29:42.336Z",
            updated_at: "2021-02-24T21:28:23.745Z"
        }
    ],
    works: [
        {
            id: "b717d9d9-4ef9-428b-a601-a14302caa974",
            title: "Coach",
            description: "ajudar pessoas!!",
            deploy_url: "gitlab.com",
            created_at: "2021-02-23T00:29:59.275Z",
            updated_at: "2021-02-23T00:29:59.275Z"
        }
    ],
    created_at: "2021-02-23T00:29:15.108Z",
    updated_at: "2021-02-23T00:29:15.108Z",
    // avatar_url: 'https://picsum.photos/200'
    avatar_url: null
}

export const UserCard = (props) => {
    const {user} = props

  return (
    <div className={styles.cardContainer}>
        {user.avatar_url?
        <img src={`${user.avatar_url}`} />
       : <AccountBoxIcon/>
        }

        <div className={styles.cardInfo}>
        <h4>{user.name}</h4>
            <p>{user.course_module}</p>
            <p>{user.created_at}</p>
            <Link to={`/${user.id}`}>visitar perfil <PersonIcon/></Link>
      </div>
    </div>

    // <div className={styles.cardContainer}>
    //     {data.avatar_url?
    //     <img src={`${data.avatar_url}`} />
    //    : <AccountBoxIcon/>
    //     }
    //
    //     <div className={styles.cardInfo}>
    //     <h4>{data.name}</h4>
    //         <p>{data.course_module}</p>
    //         <p>{data.created_at}</p>
    //         <Link>visitar perfil <PersonIcon/></Link>
    //   </div>
    // </div>
    //
  );
};
