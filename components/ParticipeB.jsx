import styles from '../styles/ParticipeB.module.scss'
import Button from './Button'

export default function Participe(props) {
    return(
        <section id="Ingressos" className={styles.section}>
            <h2 className={styles.titulo}>Garanta a sua vaga no congresso!</h2>
            <div className={styles.options}>
                <div className={styles.option}>
                    <h2 className={styles.title}>Submeter resumos</h2>
                    <p className={styles.paragraph}>
                        Concorra ao prêmio de melhor pesquisa CONTIS. <br />
                        Submeter resumos até 10/04.
                    </p>
                    <button onClick={() => {
                        window.location.href = "https://www.even3.com.br/participante/trabalhocientifico/"
                    }} className={styles.button}>Enviar meu resumo</button>
                </div>
                <div className={styles.option}>
                    <h2 className={styles.title}>Ser parecerista</h2>
                    <p className={styles.paragraph}>
                        Contribua para a produção de conhecimento.
                    </p>
                    <button onClick={() => {
                        window.location.href = "https://forms.gle/Frd7TUHrv8YxF8Ry9"
                    }} className={styles.button}>Enviar meu cadastro</button>
                </div>
                <div className={styles.option}>
                    <h2 className={styles.title}>Visitante</h2>
                    <p className={styles.paragraph}>
                        Garanta sua vaga no Congresso. Presencial ou online.
                    </p>
                    <button onClick={() => {
                        window.location.href = "https://www.even3.com.br/participante/inscricao/"
                    }} className={styles.button}>Comprar ingresso</button>
                </div>
            </div>
        </section>
    )
}