import styles from './TechsForm.module.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField} from "@material-ui/core";
import baseUrl from '../../../services/index'
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext/AuthContext";
import CloseIcon from "@material-ui/icons/Close";

export const TechsForm = ({tech, edit, handleClose}) => {
    const {token} = useContext(AuthContext)
    // const {id, title, status} = tech

    const Createschema = yup.object().shape({
        title: yup.string().required('Este campo é obrigatório'),
        status: yup.string().required('Este campo é obrigatório')
    })

    const Editschema = yup.object().shape({
        status: yup.string().required('Este campo é obrigatório')
    })

    const {errors, reset, handleSubmit, register} = useForm({
        resolver: yupResolver(edit ? Editschema : Createschema)
    })

    const headers = {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
        },
    };

    const handleForm = (data) =>{
        handleClose()
        if(edit){
            baseUrl.put(`/users/techs/${tech.id}`, data, headers).then(res => console.log(res)).catch(err => console.log(err))
        }
        else {
            baseUrl.post('/users/techs', data, headers).then(res => console.log(res)).catch(err => console.log(err))
        }
        reset()
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.closeIcon}>
                <CloseIcon onClick={()=>handleClose()}/>
            </div>
            <form  onSubmit={handleSubmit(handleForm)} className={styles.form}>
                {edit ? (
                    <p>{tech.title}</p>
                ) : (
                <TextField
                    margin={"normal"}
                    variant={"outlined"}
                    size={'small'}
                    color={"primary"}
                    label={'Nome da tech'}

                    name={'title'}
                    inputRef={register}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />
                )}

                {tech ? (
                    <TextField
                        margin={"normal"}
                        variant={"outlined"}
                        size={'small'}
                        color={"primary"}

                        label={tech.status ? `${tech.status}` : 'Status'}
                        defaultValue={tech.status ? tech.status : ''}
                        name={'status'}
                        inputRef={register}
                        error={!!errors.status}
                        helperText={errors.status?.message}
                    />
                ) : (
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
                )}
                <button className={styles.formButton} type={"submit"}>{tech? 'Salvar' : 'Adicionar'}</button>
            </form>
        </div>
    );
};