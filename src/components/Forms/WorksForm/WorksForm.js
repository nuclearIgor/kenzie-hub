import styles from './WorksForm.module.css'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {TextField} from "@material-ui/core";
import baseUrl from '../../../services/index'
import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext/AuthContext";
import CloseIcon from '@material-ui/icons/Close';

export const WorksForm = ({work, edit, handleClose}) => {

    const {token, setGlobalUser} = useContext(AuthContext)


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
    handleClose()
        if(edit){
            baseUrl.put(`/users/works/${work.id}`, data, headers).then(res => setGlobalUser(res)).catch(err => console.log(err))
        }
        else {
            baseUrl.post('/users/works', data, headers).then(res => setGlobalUser(res)).catch(err => console.log(err))
        }
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.closeIcon}>
            <CloseIcon onClick={()=>handleClose()}/>
            </div>
            <form  onSubmit={handleSubmit(handleForm)} className={styles.form}>
                {edit ? (
                    <>
                        <TextField
                            margin={"normal"}
                            variant={"outlined"}
                            size={'small'}
                            color={"primary"}

                            label={'Título'}
                            placeholder={work.title ? work.title : ''}
                            defaultValue={work.title ? work.title : ''}

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
                        placeholder={work.description ? work.description : ''}
                        defaultValue={work.description ? work.description : ''}

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
                    placeholder={work.deploy_url ? work.deploy_url : ''}
                    defaultValue={work.deploy_url ? work.deploy_url : ''}

                    name={'deploy_url'}
                    inputRef={register}
                    error={!!errors.deploy_url}
                    helperText={errors.deploy_url?.message}
                    />
                    </>
                ) : (
                    <>
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
                    </>
                    )}
                <button className={styles.formButton} type={"submit"}>{work? 'Salvar' : 'Adicionar'}</button>
            </form>
        </div>
    );
};