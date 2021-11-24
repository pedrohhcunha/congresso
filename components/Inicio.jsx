import styles from '../styles/Inicio.module.scss'
export default function Inicio(props) {
    return(
        <section id="Inicio" className={styles.section}>
            <div className={styles.areaContent}>
                <div className={styles.areaNome}>
                    <h1 className={styles.numero}>{"1°"}</h1>
                    <h1 className={styles.titulo}>Congresso <br /> Sul brasileiro <br /> de Inovação em Saúde</h1>
                </div>
                <h5 className={styles.span}>"Security, technology and sustainability in infection prevention and control."</h5>
            </div>
        </section>
    )
}