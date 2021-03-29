import styles from './LandingPage.module.css'
import {LoginForm} from "../../components/LoginForm/LoginForm";
import CodeIcon from '@material-ui/icons/Code';
import {Modal, Backdrop, Fade} from "@material-ui/core";
import {useState} from "react";
import {RegisterForm} from "../../components/RegisterForm/RegisterForm";

export const LandingPage = () => {
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
            onClick={()=>setOpen(true)}
            >
            Criar uma conta</button>
        </section>

            <Modal
            className={styles.modal}
            open={open}
            onClose={() => setOpen(false)}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 200,
            }}
            >
                <Fade in={open}>
                    <RegisterForm/>
                </Fade>
            </Modal>
        </div>
    )
}