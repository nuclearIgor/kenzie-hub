import styles from './WorksDisplay.module.css'
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import {Fade, Modal} from "@material-ui/core";
import {WorksForm} from "../Forms/WorksForm/WorksForm";
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext/AuthContext";
import ModalComponent from "../ModalComponent/ModalComponent";

const WorksDisplay = ({item, isOwner}) => {

    const [editingWork, setEditingWork] = useState(false)

    return (
    <div className={styles.displayContainer}>
    <ul>
        <li>
            Work
            {isOwner && <EditIcon onClick={()=> setEditingWork(true)}/>}
        </li>
        <li>  <span className={styles.InfoSpan}>Nome: </span> {item.title}</li>
        <li>  <span className={styles.InfoSpan}>Descrição: </span>{item.description}</li>
        <li>  <span className={styles.InfoSpan}>Url do deploy: </span>{item.deploy_url}</li>
        <li>Ultima atualização: {moment(item.updated_at).format("MMM D, YYYY")}</li>
    </ul>
   <ModalComponent handler={editingWork} setHandler={()=>setEditingWork(false)}>
       <WorksForm work={item} handleClose={() => setEditingWork(false)} edit={true}/>
   </ModalComponent>
    </div>
    );
};

export default WorksDisplay;