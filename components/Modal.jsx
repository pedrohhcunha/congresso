import styles from '../styles/Modal.module.scss'
import Formulario from './Formulario'

export default function Modal(props) {
    return(
        <aside className={styles.aside}>
            <div className={styles.modal}>
                <Formulario />
            </div>
        </aside>
    )
}