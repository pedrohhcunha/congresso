import styles from '../styles/Sobre.module.scss'
import Button from './Button'
import Image from 'next/image'
import placeholder from '../public/images/sobre.jpg'

export default function Sobre(props) {
    return(
        <section id="Sobre" className={styles.section}>
            <div className={styles.areaImagem}>
                <Image alt="Imagem sobre a infecção hospitalar" layout="fill" src={placeholder} objectFit="cover"/>
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