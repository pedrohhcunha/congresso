import styles from '../styles/Inicio.module.scss'
export default function Inicio(props) {
    return(
        <section className={styles.section}>
            <div className={styles.areaContent}>
                <div className={styles.areaNome}>
                    <h1 className={styles.numero}>1°</h1>
                    <h1 className={styles.titulo}>Congresso internacional <br /> de landing pages <br /> de alta conversão</h1>
                </div>
                <h5 className={styles.span}>"Tudo na vida é questão de escolha"</h5>
            </div>
        </section>
    )
}