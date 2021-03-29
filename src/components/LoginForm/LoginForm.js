import styles from './LoginForm.module.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useHistory} from 'react-router-dom'
import {TextField} from "@material-ui/core";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import {toast, ToastContainer} from "react-toastify";


export const LoginForm = () => {
    const {setIsAuth} = useContext(AuthContext)
    const history = useHistory()

    const schema = yup.object().shape({
        email: yup.string().email('Insira um e-mail válido').required('Esse campo é obrigatório'),
        password: yup.string().required('Esse campo é obrigatório'),
    })

    const {reset, errors, register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const errorMessage = () =>{
        console.log('veremos')
         toast.error('Ops, algo deu errado.', {
            position: toast.POSITION.BOTTOM_LEFT,
        });
    }


    const handleForm = async (data) =>{
        const postLogin = await axios.post('https://kenziehub.me/sessions', data)

        if(postLogin.status === 200){
            setIsAuth(true)
            history.push('/home')
        }
        else{
        errorMessage()
        }
        console.log(postLogin)


        reset()
    }

    return(
        <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit(handleForm)}>

            <TextField
                margin={"normal"}
                variant={"outlined"}
                size={'small'}
                color={"primary"}

                label={'Email'}

                name={'email'}
                inputRef={register}
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextField
            margin={"normal"}
            variant={"outlined"}
            size={'small'}
            color={"primary"}

            label={'Senha'}
            type={'password'}

            name={'password'}
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
            />


            <button
            type={'submit'}
            className={styles.formButton}
            >Entrar</button>
            </form>

        </div>
    )
}