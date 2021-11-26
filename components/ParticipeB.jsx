import styles from '../styles/ParticipeB.module.scss'
import Button from './Button' 

export default function ParticipeB(props) {
    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}> Garanta a sua vaga no congresso! </h2>
            <Button>GARANTIR MINHA VAGA</Button>
        </section>
    )
}