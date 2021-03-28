import styles from './LoginForm.module.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useHistory} from 'react-router-dom'

export const LoginForm = () => {
    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email('Insira um e-mail válido').required('Esse campo é obrigatório'),
        password: yup.string().required('Esse campo é obrigatório'),
    })

    const {reset, errors, register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })


    const handleForm =(data) =>{
        console.log(data)
        // history.push('/')
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        <div>
            <label>Email</label>
            <input
            ref={register}
            placeholder={'Seu email'}
            name='email'
            />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label>Senha</label>
            <input
            ref={register}
            placeholder={'Sua senha'}
            name='password'
            />
            <p>{errors.password?.message}</p>
        </div>
            </form>
            <button
            type={'submit'}
            className={styles.formButton}
            >Entrar</button>
        </div>
    )
}