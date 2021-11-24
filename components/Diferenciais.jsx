import styles from '../styles/Diferenciais.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Diferenciais(props) {
    return(
        <section id="Diferenciais" className={styles.section}>
            <h2 className={styles.titulo}>Texto da seção</h2>
            <div className={styles.diferenciais}>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Titulo</h4>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, consequuntur similique nihil porro obcaecati dolorum fuga illum hic saepe! Incidunt voluptate consequuntur nesciunt voluptas.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Titulo</h4>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, consequuntur similique nihil porro obcaecati dolorum fuga illum hic saepe! Incidunt voluptate consequuntur nesciunt voluptas.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Titulo</h4>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, consequuntur similique nihil porro obcaecati dolorum fuga illum hic saepe! Incidunt voluptate consequuntur nesciunt voluptas.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Titulo</h4>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, consequuntur similique nihil porro obcaecati dolorum fuga illum hic saepe! Incidunt voluptate consequuntur nesciunt voluptas.</p>
                </div>
            </div>
        </section>
    )
}