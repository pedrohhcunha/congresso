import styles from '../styles/Mapa.module.scss'
import Image from 'next/image'
import localImg from '../public/images/fotoCentro.jpeg'

export default function Mapa(props) {
    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}>Saiba mais sobre o evento</h2>
            <div className={styles.topArea}>
                <p className={styles.p}>
                O I Congresso Sul brasileiro de Tecnologia e Inovação em Saúde: Security, technology and sustainability in infection prevention and control - CONTIS é um evento híbrido que acontecerá nos dias 26, 27 e 28 de maio de 2022, no Salão Nobre da Universidade Comunitária de Chapecó - Unochapecó na forma presencial. A transmissão ao vivo será disponibilizada para todo o território brasileiro, a partir da confirmação de cadastro no evento.
                <br /> <br />
                O CONTIS contará com uma programação recheada com palestras, mesas-redondas, apresentações de trabalhos científicos, apresentações orais de cases de sucessos e muito mais.
                <br /> <br />
                Foi pensado e construído em cima da importância de se estudar e discutir sobre Infecção Hospitalar, visando também a conotação abordada pela própria Anvisa em inserir este tema dentro dos cursos de graduação da saúde. Indicado para gerentes e executivos de saúde, médicos, enfermeiros e demais profissionais da Área da Saúde, bem como alunos de graduação e pós-graduação.
                <br /> <br />
                Todos os protocolos de segurança serão respeitados e a organização foi pensada de forma a evitar aglomerações no local. 
                Esperamos você!

                </p>
                <div className={styles.areaFoto}>
                    <Image src={localImg} layout='fill' />
                </div>
            </div>
            <h5>Veja aqui a localização do evento</h5>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.9808982679688!2d-52.66866168433962!3d-27.093898207312037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b506aca00669%3A0x685086c4948b557e!2sUnochapec%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1639678338386!5m2!1spt-BR!2sbr"
                loading="lazy"
                className={styles.mapa}>
            </iframe>   
        </section>       
    )
}