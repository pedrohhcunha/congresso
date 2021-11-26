import styles from '../styles/Trabalhos.module.scss'
import Button from '../components/Button'

export default function Trabalhos(props) {
    return(
        <section id="Trabahos" className={styles.section}>
            <h2 className={styles.titulo}>Esse é o titulo</h2>
            <div className={styles.content}>
                <div className={styles.leftArea}>
                    <p className={styles.p}>
                    -  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit sequi recusandae rem alias, sit accusantium rerum id voluptatibus atque esse nam cumque. <br />
                    -  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit sequi recusandae rem alias, sit accusantium rerum id voluptatibus atque esse nam cumque. <br />
                    -  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit sequi recusandae rem alias, sit accusantium rerum id voluptatibus atque esse nam cumque. <br />
                    -  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit sequi recusandae rem alias, sit accusantium rerum id voluptatibus atque esse nam cumque. <br />
                    </p>
                </div>
                <div className={styles.rightArea}>
                    <div className={styles.calendar}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat vitae ullam explicabo accusamus eligendi modi dignissimos ab neque porro iusto totam odio natus, voluptatibus, illum minima, vero aliquam tempore.</div>
                    <Button>CTA BUTTON</Button>
                </div>
            </div>
        </section>
    )
}