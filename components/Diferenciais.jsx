import styles from '../styles/Diferenciais.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowsAltH, faBong, faBrain } from '@fortawesome/free-solid-svg-icons'

export default function Diferenciais(props) {
    return(
        <section id="Diferenciais" className={styles.section}>
            <h2 className={styles.titulo}>Nossos Diferenciais</h2>
            <div className={styles.diferenciais}>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faBong} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Ciência</h4>
                    <p className={styles.p}>Reunir diferentes atores da prática assistencial à saúde e estimular estudantes e professores da área para ampliar os conhecimentos sobre infecção hospitalar. </p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faArrowsAltH} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Conexão</h4>
                    <p className={styles.p}>Reunir pesquisadores para refletir sobre temas relevantes da área de Infecção Hospitalar, em palestras e apresentações de trabalhos científicos que compõem o evento.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faBrain} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Solução</h4>
                    <p className={styles.p}>Apresentar soluções corporativas para qualificar a prática profissional e melhorar a qualidade da assistência à saúde e a segurança dos profissionais e pacientes.</p>
                </div>
            </div>
        </section>
    )
}