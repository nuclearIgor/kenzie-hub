import styles from './LandingPage.module.css'
import {LoginForm} from "../../components/Forms/LoginForm/LoginForm";
import CodeIcon from '@material-ui/icons/Code';
import {useState} from "react";
import {useHistory} from "react-router-dom";

export const LandingPage = () => {
    const history = useHistory()

    const [open, setOpen] = useState(false)


    return(
        <div className={styles.landingPageContainer}>
        <section className={styles.landingPageLeft}>
           <h1> Kenzie <br/>
           <span>
           <CodeIcon/>
           </span>
            Hub</h1>
            {/*<hr/>*/}
            <h2>Cadastre e mostre suas techs e trabalhos</h2>
        </section>

        <section className={styles.landingPageRight}>
            <LoginForm/>

            <button
            className={styles.registerButton}
            onClick={() => history.push('/register')}
            >
            Criar uma conta</button>
        </section>


        </div>
    )
}