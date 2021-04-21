import styles from './ModalComponent.module.css'
import {Modal, Fade} from "@material-ui/core";

const ModalComponent = ({children, handler, setHandler}) => {

    return (
        <Modal open={handler}>
            <Fade in={handler}>
                <div className={styles.modalContainer}>
                    {children}
                </div>
            </Fade>
        </Modal>
    );
};

export default ModalComponent;