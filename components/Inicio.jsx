import styles from '../styles/Inicio.module.scss'
import Image from 'next/image'
import logo from '../public/images/logos/logo.png'

export default function Inicio(props) {
    return(
        <section id="Inicio" className={styles.section}>
            <div className={styles.areaContent}>
                <div className={styles.areaNome}>
                    <h1 className={styles.numero}>{"I"}</h1>
                    <div className={styles.areaRight}>
                        <h1 className={styles.contis}>CONTIS</h1>
                        <h1 className={styles.titulo}>Congresso <br /> Sul Brasileiro <br /> de Inovação em Saúde</h1>
                    </div>
                </div>
                <h5 className={styles.span}>{`"Security, Technology and Sustainability in Infection prevention and control"`}</h5>
            </div>
            <div className={styles.areaLogo}>
                <Image src={logo} />
            </div>
        </section>
    )
}