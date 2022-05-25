import styles from '../styles/Sobre.module.scss'
import Button from './Button'

export default function Sobre(props) {
    return(
        <section id="Sobre" className={styles.section}>
            <div className={styles.container}>
                <iframe
                    className={styles.iframe}
                    title="Video Contis"
                    src="https://www.youtube.com/embed/orbUSA7pbXY"
                    frameBorder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen="allowFullScreen"
                ></iframe>
            </div>
            <div className={styles.areaInfo}>
                <h2 className={styles.title}>O CONTIS</h2>
                <p className={styles.p}>O grupo Onfinity tem o prazer em apresentar o 1º  Congresso Sul Brasileiro de Inovação em Saúde. Com tema voltado à Segurança, Tecnologia aliadas à Sustentabilidade, buscamos a prevenção e controle de Infecções Hospitalares. A partir do viés científico, este evento propõe a discussão, sensibilização e aperfeiçoamento profissional do público presente por meio de palestras e mesas-redondas.</p>
                <Button onClick={props.openModal} marginBottom>Participar do evento</Button>

                <Button alternative marginLeft branco>Submeter trabalhos</Button>
            </div>
        </section>
    )
}