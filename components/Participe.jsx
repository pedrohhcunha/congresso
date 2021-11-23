import styles from '../styles/Participe.module.scss'
import Button from './Button'

export default function Participe(props) {
    return(
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.titulo}>Faça parte deste grande evento!</h2>
                <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aperiam magni mollitia necessitatibus ratione, voluptatibus et sunt voluptas minus, perspiciatis qui? Aperiam alias deserunt a, autem inventore sapiente iusto sequi.</p>
                <Button>CTA BUTTON</Button>
            </div>
        </section>
    )
}