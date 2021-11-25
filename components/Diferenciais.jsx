import styles from '../styles/Diferenciais.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Diferenciais(props) {
    return(
        <section id="Diferenciais" className={styles.section}>
            <h2 className={styles.titulo}>Nossos Diferenciais</h2>
            <div className={styles.diferenciais}>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Inovação e Tecnologia</h4>
                    <p className={styles.p}>Apresentar soluções... Investimos na alta tecnologia, no desenvolvimento de produtos e qualidade no atendimento. Isso tudo com mais de 15 anos de experiência no segmento healthcare.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Segurança</h4>
                    <p className={styles.p}>Proporcionar a segurança ideal no convívio hospitalar e em diversas áreas relacionadas à saúde através das boas práticas de cuidados.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Sustentabilidade</h4>
                    <p className={styles.p}>Com amplo know-how para investir em produtos de alta qualidade, buscamos diariamente entender as necessidades dos nossos clientes e atendê-las na medida certa.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Prevenção e controle</h4>
                    <p className={styles.p}>Com amplo know-how para investir em produtos de alta qualidade, buscamos diariamente entender as necessidades dos nossos clientes e atendê-las na medida certa.</p>
                </div>
            </div>
        </section>
    )
}