import styles from './RegisterForm.module.css'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

export const RegisterForm =() =>{
    const require = 'Este campo é obrigatório'
    const schema = yup.object().shape({
        email: yup.string().email('Insira um email válido').required(require),
        password: yup.string().required(require),
        name: yup.string().required(require),
        bio: yup.string().required(require),
        contact: yup.string().required(require),
        course_module: yup.string().required(require),
    })

    const {register, reset, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })

    const handleForm = (data) =>{
        console.log(data)
    }

    return(
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
                <div>
                    <label>Email</label>
                    <input
                    ref={register}
                    name={'email'}
                    placeholder={'Seu melhor email'}
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input
                    ref={register}
                    name={'password'}
                    placeholder={'Sua senha'}
                    />
                </div>
                <div>
                    <label>Nome</label>
                    <input
                    ref={register}
                    name={'name'}
                    placeholder={'Seu nome'}
                    />
                </div>
                <div>
                    <label>Bio</label>
                    <input
                    ref={register}
                    name={'bio'}
                    placeholder={'Um resumo sobre você'}
                    />
                </div>
                <div>
                    <label>Contato</label>
                    <input
                    ref={register}
                    name={'contact'}
                    placeholder={'Contato'}
                    />
                </div>
                <div>
                    <label>Módulo do curso</label>
                    <input
                    ref={register}
                    name={'course_module'}
                    />
                </div>

            <button className={styles} type={'submit'}>Registrar</button>
            </form>
        </div>
    )
}