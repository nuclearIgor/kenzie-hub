import styles from './TechsDisplay.module.css'
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import {Fade, Modal} from "@material-ui/core";
import {TechsForm} from "../Forms/TechsForm/TechsForm";
import {useState} from "react";
import ModalComponent from "../ModalComponent/ModalComponent";

export const TechsDisplay = ({item, isOwner}) => {
    const [editingTech, setEditingTech] = useState(false)

    return(
    <div className={styles.displayContainer}>
        <ul>
            <li>Tech
                {isOwner && <EditIcon onClick={()=> setEditingTech(true)}/>}
            </li>

            <li> <span className={styles.InfoSpan}>Nome: </span>{item.title}</li>
            <li> <span className={styles.InfoSpan}>Status: </span>{item.status}</li>
            <li> <span className={styles.InfoSpan}>Ultima atualização: </span>{moment(item.updated_at).format("MMM D, YYYY")}</li>

          <ModalComponent handler={editingTech} setHandler={()=> setEditingTech(false)}>
              <TechsForm tech={item} handleClose={() => setEditingTech(false)} edit={true}/>
          </ModalComponent>
        </ul>
    </div>
    )
}