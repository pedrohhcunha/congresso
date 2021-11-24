import styles from '../styles/Participe.module.scss'
import Button from './Button'

export default function Participe(props) {
    return(
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.titulo}>Faça parte deste grande evento!</h2>
                <p className={styles.p}>Palestras; Mesas Redondas; Apresentação de trabalhos científicos; Apresentação Oral de Cases de Sucessos.</p>
                <Button>Confirmar presença</Button>
            </div>
        </section>
    )
}