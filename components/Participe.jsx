import styles from '../styles/Participe.module.scss'
import Button from './Button'

export default function Participe(props) {
    return(
        <section className={`${styles.section} ${styles.alternative}`}>
            <div className={styles.content}>
                <h2 className={styles.titulo}>Faça parte deste grande evento</h2>
                <p className={styles.p}>Palestras; Mesas-redondas; Apresentação de trabalhos científicos e Cases de Sucessos.</p>
                <Button>GARANTIR MINHA VAGA</Button>
            </div>
        </section>
    )
}