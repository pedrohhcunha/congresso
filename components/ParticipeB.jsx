import styles from '../styles/ParticipeB.module.scss'
import Button from './Button' 

export default function ParticipeB(props) {
    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}>Participe desse eventou taura</h2>
            <Button>CTA BUTTON</Button>
        </section>
    )
}