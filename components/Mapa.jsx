import styles from '../styles/Mapa.module.scss'

export default function Mapa(props) {
    return(
        <section className={styles.section}>

            <div className={styles.topArea}>
                <p className={styles.p}>
                    O CONTIS é um evento híbrido que acontecerá nos dias 26, 27 e 28 de maio de 2022, no Salão Nobre da Universidade Comunitária de Chapecó - Unochapecó na forma presencial. Para a transmissão ao vivo, será disponibilizado para todo o território brasileiro.
                    <br /><br />
                    Todos os protocolos de segurança serão respeitados e a organização está sendo feita de forma a evitar aglomerações no local.
                </p>
                <div className={styles.areaFoto}>

                </div>
            </div>
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14208.00423924772!2d-52.6634982!3d-27.0932625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b92e061e9280471!2sPollen%20Parque%20Cient%C3%ADfico%20e%20Tecnol%C3%B3gico!5e0!3m2!1spt-BR!2sbr!4v1637696008566!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    className={styles.mapa}>
                </iframe>   
        </section>       
    )
}