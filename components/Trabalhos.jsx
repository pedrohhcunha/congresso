import styles from '../styles/Trabalhos.module.scss'
import Button from '../components/Button'

export default function Trabalhos(props) {
    return(
        <section id="Trabahos" className={styles.section}>
            <h2 className={styles.titulo}>Submissão de trabalhos</h2>
            <div className={styles.content}>
                <div className={styles.leftArea}>
                    <p className={styles.p}>
                    <br /> - A inscrição deverá ser efetuada  obrigatoriamente por um autor já inscrito no evento;
                    <br /> - Deve ser enviado o resumo do trabalho a ser apresentado durante o CONIVAH;
                    <br /> - Número máximo de autores: cinco. Cada autor poderá apresentar até dois trabalhos como relator;
                    <br /> - Não há limite para submissão de trabalhos como coautor;
                    <br /> - Não será cobrada taxas ou valores adicionais para a submissão de trabalhos no congresso.
                    </p>
                </div>
                <div className={styles.rightArea}>
                    <div className={styles.calendar}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellat vitae ullam explicabo accusamus eligendi modi dignissimos ab neque porro iusto totam odio natus, voluptatibus, illum minima, vero aliquam tempore.</div>
                    <Button>Submeter trabalhos</Button>
                </div>
            </div>
            <a target="__blank" className={styles.link} href="google.com">Clique aqui para acessar o regulamento e eixos temáticos.</a>
        </section>
    )
}