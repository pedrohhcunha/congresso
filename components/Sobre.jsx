import styles from '../styles/Sobre.module.scss'
import Button from './Button'

export default function Sobre(props) {
    return(
        <section id="Sobre" className={styles.section}>
            <div className={styles.areaImagem}></div>
            <div className={styles.areaInfo}>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur placeat quasi sequi quam libero pariatur, perferendis maxime vero reprehenderit! Aspernatur doloremque maiores quae qui quaerat magnam quia molestiae numquam at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est labore nulla eum expedita eligendi sed! Error est rem quo adipisci dolor laudantium eveniet nostrum a, corrupti modi deserunt laborum minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum illum eius saepe mollitia, nobis quasi possimus veniam atque deserunt eligendi aperiam quisquam vel excepturi odio earum facere quaerat at? Id.</p>
                <Button>CTA BUTTON</Button>
            </div>
        </section>
    )
}