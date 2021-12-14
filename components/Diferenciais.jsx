import styles from '../styles/Diferenciais.module.scss'
import Image from 'next/image'
import ciencia from '../public/icones/ciencia.png'
import conexao from '../public/icones/conexao.png'
import solucao from '../public/icones/solucao.png'


export default function Diferenciais(props) {
    return(
        <section id="Diferenciais" className={styles.section}>
            <h2 className={styles.titulo}>Objetivos</h2>
            <div className={styles.diferenciais}>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <Image alt="Icone de diferenciais do congresso" src={ciencia} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Ciência</h4>
                    <p className={styles.p}>Reunir diferentes atores da prática assistencial à saúde e estimular estudantes e professores da área para ampliar os conhecimentos sobre infecção hospitalar.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <Image alt="Icone de diferenciais do congresso" src={conexao} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Conexão</h4>
                    <p className={styles.p}>Reunir pesquisadores para refletir sobre temas relevantes da área de Infecção Hospitalar, em palestras e apresentações de trabalhos científicos que compõem o evento.</p>
                </div>
                <div className={styles.diferencial}>
                    <div className={styles.areaIcon}>
                        <Image alt="Icone de diferenciais do congresso" src={solucao} />
                    </div>
                    <h4 className={styles.tituloDiferencial}>Solução</h4>
                    <p className={styles.p}>Apresentar soluções corporativas para qualificar a prática profissional e melhorar a qualidade da assistência à saúde e a segurança dos profissionais e pacientes.</p>
                </div>
            </div>
        </section>
    )
}