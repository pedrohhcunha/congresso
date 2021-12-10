import styles from '../styles/FaixaDestaque.module.scss'

export default function FaixaDestaque(props) {
    return(
        <section className={styles.section}>
            <div className={styles.info}>
                <h2>26, 27 e 28</h2>
                <h4>de maio</h4>
            </div>
            <div className={styles.info}>
                <h2>Salão Nobre</h2>
                <h4>Chapecó</h4>
            </div>
            <div className={styles.info}>
                <h2>Evento Híbrido</h2>
                <h4>Remoto e presencial</h4>
            </div>
        </section>
    )
}