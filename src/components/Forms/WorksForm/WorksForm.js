import styles from './WorksForm.module.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField} from "@material-ui/core";
import baseUrl from '../../../services/index'
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext/AuthContext";

export const WorksForm = ({work}) => {
    const {token} = useContext(AuthContext)


    const schema = yup.object().shape({
        title: yup.string().required('Este campo é obrigatório'),
        description: yup.string().required('Este campo é obrigatório'),
        deploy_url: yup.string().required('Este campo é obrigatório')
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
        baseUrl.post('/users/works', data, headers).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <div className={styles.formContainer}>
            <form  onSubmit={handleSubmit(handleForm)} className={styles.form}>
                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Título'}

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

                    label={'Descrição'}

                    name={'description'}
                    inputRef={register}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />
                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}

                    label={'Url do deploy'}

                    name={'deploy_url'}
                    inputRef={register}
                    error={!!errors.deploy_url}
                    helperText={errors.deploy_url?.message}
                />

                <button className={styles.formButton} type={"submit"}>{work? 'Salvar' : 'Adicionar'}</button>
            </form>
        </div>
    );
};