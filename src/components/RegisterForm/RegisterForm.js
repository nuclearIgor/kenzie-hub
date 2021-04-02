import styles from './RegisterForm.module.css'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import {TextField} from "@material-ui/core";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const RegisterForm =() =>{
    const history = useHistory()

    const requiredField = 'Este campo é obrigatório'
    const schema = yup.object().shape({
        email: yup.string().email('Insira um email válido').required(requiredField),
        password: yup.string().required(requiredField),
        name: yup.string().required(requiredField),
        bio: yup.string().required(requiredField),
        contact: yup.string().required(requiredField),
        course_module: yup.string().required(requiredField),
    })

    const {register, reset, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })

    const handleForm = async (data) =>{
        // console.log(data)
        const postRegister = await axios.post('https://kenziehub.me/users', data)
        console.log(postRegister)

        if(postRegister.status === 201){
            history.push('/')
        }

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
                    type={'email'}

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

                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Nome'}
                    type={'text'}

                    name={'name'}
                    inputRef={register}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Bio'}
                    type={'text'}

                    name={'bio'}
                    inputRef={register}
                    error={!!errors.bio}
                    helperText={errors.bio?.message}
                />

                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Contato'}
                    type={'text'}

                    name={'contact'}
                    inputRef={register}
                    error={!!errors.contact}
                    helperText={errors.contact?.message}
                />

                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Módulo do curso'}
                    type={'text'}

                    name={'course_module'}
                    inputRef={register}
                    error={!!errors.course_module}
                    helperText={errors.course_module?.message}
                />
            <button className={styles.Button} type={'submit'}>Registrar</button>
            </form>
        </div>
    )
}