import styles from './TechsForm.module.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField} from "@material-ui/core";
import baseUrl from '../../../services/index'
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext/AuthContext";

export const TechsForm = ({tech}) => {
    const {token} = useContext(AuthContext)


    const schema = yup.object().shape({
        title: yup.string().required('Este campo é obrigatório'),
        status: yup.string().required('Este campo é obrigatório')
    })

    const {errors, reset, handleSubmit, register} = useForm({
        resolver: yupResolver(schema)
    })

    const headers = {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
        },
    };

    const handleForm = (data) =>{
        baseUrl.post('/users/techs', data, headers).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div className={styles.formContainer}>
            <form  onSubmit={handleSubmit(handleForm)} className={styles.form}>
                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Tech'}

                    name={'title'}
                    inputRef={register}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />
                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Status'}

                    name={'status'}
                    inputRef={register}
                    error={!!errors.status}
                    helperText={errors.status?.message}
                />

                <button className={styles.formButton} type={"submit"}>{tech? 'Salvar' : 'Adicionar'}</button>
            </form>
        </div>
    );
};