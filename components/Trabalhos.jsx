import styles from '../styles/Trabalhos.module.scss'
import Button from '../components/Button'
import Link from 'next/link'

export default function Trabalhos(props) {
    return(
        <section id="Trabalhos" className={styles.section}>
            <h2 className={styles.titulo}>Submissão de trabalhos</h2>
            <div className={styles.topArea}>
                <div className={styles.datas}>
                    <div className={styles.data}>
                        <h3 className={styles.tituloData}>Até 10/04</h3>
                        <h5 className={styles.textoData}>Submissão de resumos</h5>
                    </div>
                    <div className={styles.data}>
                        <h3 className={styles.tituloData}>Até 30/04</h3>
                        <h5 className={styles.textoData}>Divulgação dos resultados</h5>
                    </div>
                </div>
                <h2 className={styles.frase}>
                    “No Brasil, a taxa de infecção hospitalar chega a 14%”. 
                    <strong> (OMS, 2021)</strong>
                </h2> 
                <div className="botoes">
                    <Button onClick={() => {
                        window.location.href = "https://www.even3.com.br/participante/trabalhocientifico/"
                    }}>Submeter trabalhos</Button>
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
                <Link target="__blank" href="/trabalhos">
                    <a className={styles.a}>
                        Clique aqui para visualizar os trabalhos submetidos.
                    </a>
                </Link>
            </div>
            <div className={styles.link}>
                <a target="__blank" className={styles.a} href="document.pdf">Clique aqui para acessar o regulamento e eixos temáticos.</a>
            </div>
            <div className={styles.link}>
                <a target="__blank" className={styles.a} href="template.pptx">Acesse aqui o template do pôster para apresentação.</a>
            </div>
            <div className={styles.link}>
                <a target="__blank" className={styles.a} href="template_video.pptx">Acesse aqui o template do vídeo para apresentação.</a>
            </div>
            <div className={styles.link}>
                <a target="__blank" className={styles.a} href="regras.pdf">Acesse aqui as regras para apresentação e avaliação do vídeo.</a>
            </div>
        </section>
    )
}
