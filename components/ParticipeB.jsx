import styles from '../styles/Participe.module.scss'
import Button from './Button'

export default function Participe(props) {
    return(
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.titulo}>Garanta a sua vaga no congresso!</h2>
                <Button>GARANTIR MINHA VAGA</Button>
            </div>
        </section>
    )
}