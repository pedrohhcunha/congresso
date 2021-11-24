import styles from '../styles/Cadastro.module.scss'
import Formulario from './Formulario.jsx'

export default function Cadastro(props) {
    return(
        <section id="Cadastro" className={styles.section}>
            <h2 className={styles.titulo}>Cadastre-se agora</h2>
            <div className={styles.areaForm}>
                <Formulario />
            </div>
        </section>
    )
}