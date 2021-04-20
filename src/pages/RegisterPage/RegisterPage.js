import styles from './RegisterPage.module.css'
import CodeIcon from "@material-ui/icons/Code";
import {RegisterForm} from "../../components/Forms/RegisterForm/RegisterForm";

const RegisterPage = () => {
    return (
        <div className={styles.registerPageContainer}>
            <section className={styles.registerPageRight}>
                <h1> Kenzie <br/>
                    <span>
           <CodeIcon/>
           </span>
                    Hub</h1>
                {/*<hr/>*/}
                <h2>Cadastre e mostre suas techs e trabalhos</h2>
            </section>
            <section className={styles.registerPageLeft}>
                <RegisterForm/>
            </section>
        </div>
    );
};

export default RegisterPage;