import styles from '../styles/Trabalhos.module.scss'
import Button from '../components/Button'

export default function Trabalhos(props) {
    return(
        <section id="Trabahos" className={styles.section}>
            <h2 className={styles.titulo}>Submissão de trabalhos</h2>
            <div className={styles.topArea}>
                <h2 className={styles.frase}>
                    “No Brasil, a taxa de infecção hospitalar chega a 14%”.
                </h2>
                <div className={styles.datas}>
                    <div className={styles.data}>
                        <h3 className={styles.tituloData}>30 de abril</h3>
                        <h5 className={styles.textoData}>Submissão de resumos</h5>
                    </div>
                    <div className={styles.data}>
                        <h3 className={styles.tituloData}>20 de março</h3>
                        <h5 className={styles.textoData}>Divulgação dos resultados</h5>
                    </div>
                </div>
                <div className="botoes">
                    <Button>Submeter trabalhos</Button>
                </div>
            </div>
            <div className={styles.areaTopicos}>
                <p className={styles.p}>
                    <br />Submeta sua pesquisa;
                    <br />Apresente via online ou presencial durante o evento;
                    <br />Tenha seu resumo publicado em anais;
                    <br />Concorra ao prêmio de melhor pesquisa CONTIS.
                </p>
            </div>
            <div className={styles.link}>
                <a target="__blank" className={styles.a} href="google.com">Clique aqui para acessar o regulamento e eixos temáticos.</a>
            </div>
        </section>
    )
}