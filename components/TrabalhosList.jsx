import styles from '../styles/trabalhoList.module.scss'
import YoutubeVideo from './YoutubeVideo'

export default function TrabalhosList() {
    const videos = [
        {
            title: 'CARACTERIZACAO FÍSICO-QUÍMICA DE FARINHAS OBTIDAS A PARTIR DE COPRODUTOS DA ABÓBORA (Cucurbita Moschata).Resumo Expandido / Eixo Ii - Tecnologias E Inovações Em Saúde',
            author: 'Apresentador: Tiago Soares',
            url: 'https://www.youtube.com/embed/Nj1O-_0v1WE',
        },
        {
            title: 'CONSULTA DE ENFERMAGEM NO PRÉ-NATAL BAIXO RISCOResumo Expandido / Eixo I - Gestão E Educação Em Saúde',
            author: 'Apresentador: Francieli Roberta Vieira, Kimberly natalya cenci',
            url: 'https://www.youtube.com/embed/LVCM7PABkzw',
        },
        {
            title: 'SAÚDE ITINERANTE NAS FEIRAS: REVISITANDO PRÁTICAS, CONSTRUINDO PERSPECTIVASResumo Expandido / Eixo Iii - Relatos De Experiências E/Ou Experiência Exitosas Em Saúde',
            author: 'Apresentador: Tatiana Rodrigues da Silva Dantas',
            url: 'https://www.youtube.com/embed/ickSFf4CD7o',
        },
        {
            title: 'CUIDADOS DE ENFERMAGEM PARA A MANUTENÇÃO DO CATETER CENTRAL DE INCISÃO PERIFÉRICA EM PACIENTE PEDIÁTRICOResumo Expandido / Eixo Iv – Prevenção E Controle De Infecções Em Saúde',
            author: 'Apresentador: Endria Mendes Fabrizzio',
            url: 'https://www.youtube.com/embed/IaDoioo3lXA',
        },
        {
            title: 'VIVÊNCIAS MATERNAS SOBRE O ALEITAMENTO MATERNO CONTINUADO VERSUS DESMAME NATURALResumo Expandid / Eixo I - Gestão E Educação Em Saúde',
            author: 'Apresentador: Gabrieli Possebon',
            url: 'https://www.youtube.com/embed/H04U5HIEWkU',
        },
        {
            title: 'O TRABALHO DO ENFERMEIRO COM O MANEJO DE MEDICAMENTOS POTENCIAMENTE PERIGOSOS: RELATO DE EXPERIÊNCIAResumo Expandido / Eixo Iii - Relatos De Experiências E/Ou Experiência Exitosas Em Saúde',
            author: 'Apresentador: Helga de souza soares',
            url: 'https://www.youtube.com/embed/f_wcn53eStA',
        },
        {
            title: 'IMPLANTAÇÃO DO PROTOCOLO DE PREVENÇÃO DE QUEDAS EM UM HOSPITAL DE REFERÊNCIA NO ESTADO DA PARAÍBA: RELATO DE EXPERIÊNCIAResumo Expandido / Eixo Iii - Relatos De Experiências E/Ou Experiência Exitosas Em Saúde',
            author: 'Apresentador: Cibelly Nunes Fortunato',
            url: 'https://www.youtube.com/embed/LwsGPQ5jCPY',
        },
        {
            title: 'ATUAÇÃO DA EQUIPE MULTIPROFISSIONAL DE TERAPIA NUTRICIONAL EM UM HOSPITAL PÚBLICO: RELATO DE EXPERIÊNCIAResumo Expandido / Eixo Iii - Relatos De Experiências E/Ou Experiência Exitosas Em Saúde',
            author: 'Apresentador: Ericka Vilar Bôtto Targino',
            url: 'https://www.youtube.com/embed/2Dh39bB6nJ0',
        },
        {
            title: 'COMPOSTOS FENÓLICOS TOTAIS, FLAVONÓIDES E CAPACIDADE ANTIOXIDANTE EM COPRODUTOS DA FARINHA DA ABÓBORA (Cucurbita Moschata).Resumo Expandido / Eixo Ii - Tecnologias E Inovações Em Saúde',
            author: 'Apresentador: Tiago Soares',
            url: 'https://www.youtube.com/embed/CIMcuojH_T4'
        }
    ] 
    return(
        <section id="Trabalhos" className={styles.section}>
            <h2 className={styles.titulo}>Trabalhos submetidos</h2>

            <div className={styles.videos}>
                {videos.map((video, index) => (
                    <div key={index} className={styles.video}>
                        <h3 className={styles.title}>{video.title}</h3>
                        <p className={styles.author}>{video.author}</p>
                        <YoutubeVideo url={video.url} />
                    </div>
                ))}
            </div>
        </section>
    )
}