import styles from '../styles/Palestrantes.module.scss'
import placeholder from '../public/images/placeholder.png'
import Palestrante from './Palestrante'

import fabiana from '../public/images/palestrantes/fabiana.jpg'
import rodrigo from '../public/images/palestrantes/rodrigo.jpeg'
import leticia from '../public/images/palestrantes/leticia.jpeg'
import lediane from '../public/images/palestrantes/lidiane.jpeg'
import victor from '../public/images/palestrantes/victor.jpeg'
import isabela from '../public/images/palestrantes/isabela.jpeg'
import taise from '../public/images/palestrantes/taise.jpeg'
import gessy from '../public/images/palestrantes/gessy.jpeg'
import bruno from '../public/images/palestrantes/bruno.jpg'
import luciane from '../public/images/palestrantes/luciane.jpg'
import daivana from '../public/images/palestrantes/daivana.jpeg'
import marinei from '../public/images/palestrantes/marinei.jpeg'
import fabio from '../public/images/palestrantes/fabio.png'
import manuela from '../public/images/palestrantes/manuela.jpeg'

import { useEffect, useState } from 'react'

export default function Palestrantes(props) {

    const [verMais, setVerMais] = useState(false);

    useEffect(() => {
        setVerMais(window.screen.width >= 600)
    }, []);

    const palestrantes = [
        [
            {
                nome: 'Manuela Correa De Quadro',
                cargo: 'Enfermeira',
                foto: manuela,
                texto: 'Enfermeira Coordenadora do Serviço de Controle de Infecção Hospitalar do HUST. Especialização MBA em Controle de Infecção e Gestão em Saúde, Urgência e Emergência e Habilitação em Tratamento de Feridas.'
            },
            {
                nome: 'Daivana Kunz',
                cargo: 'Enfermeira',
                foto: daivana,
                texto: "Enfermeira com especialização em Terapia Intensiva. Mestre em Enfermagem, docente e orientadora de estágio do Curso Técnico em Enfermagem,  coordenadora da CIHDOTT e membro do Grupo de pesquisa PRÁXIS do PEN/UFSC."
            },
            {
                nome: 'Fabiana Meneghetti Dallacosta',
                cargo: 'Enfermeira',
                foto: fabiana,
                texto: "Enfermeira, especialista em Nefrologia e em Terapia Intensiva. Mestre em Saúde Coletiva, Doutora em Ciências da Saúde. Atualmente é coordenadora do Mestrado em Biociências e Saúde da Unoesc, onde atua como docente e pesquisadora desenvolvendo estudos com ênfase nas doenças crônicas não transmissíveis. "
            },
            {
                nome: 'Gessy de Morais',
                cargo: 'Enfermeira',
                foto: gessy,
                texto: "Enfermeira responsável pela CME do Hospital Universitário Santa Terezinha (HUST) a 6 anos. Especialista em UTI-Adulto pela FSF(Faculdade São Fidélis). Atualmente cursando MBA Gestão em saúde, controle de infecção e MBA Gestão em centro de Material e Esterilização pela FACEAT ."
            },
            {
                nome: 'Isabela Pisseti Piccinin',
                cargo: 'Farmacêutica',
                foto: isabela,
                texto: "Farmacêutica bioquímica responsável técnica de laboratório de análises clínicas e gestora de laboratório, pela terceira vez na área hospitalar atua na gestão de suprimentos de materiais e medicamentos. Graduada pela Unochapecó com especialização em Análises Clínicas e pós-graduação em Análises Clínicas. Tem 15 anos de experiência na área de gestão hospitalar e gestão de processos e pessoas na área farmacêutica. "
            },
            {
                nome: 'Leticia Stefenon',
                cargo: 'Cirurgiã-dentista',
                foto: leticia,
                texto: "Dentista, doutora e mestre em Clínicas Odontológicas, com especialização em Patologia Bucal e Saúde Pública. Docente nas disciplinas de Patologia Geral, Patologia Oral e Estomatologia na FASURGS, onde atua também como Coordenadora de Iniciação Científica Pesquisa e Extensão, participa do Colegiado do Curso de Odontologia e do Núcleo Docente Estruturante (NDE) do mesmo curso."
            },
            {
                nome: 'Lidiane Riva Pagnussat',
                cargo: 'Farmacêutica',
                foto: lediane,
                texto: "Farmacêutica do Serviço de Controle de Infecção e Núcleo de Segurança do Paciente do HCR Marau-RS. Professora, mestra em Envelhecimento Humano e especialista em Residência Multiprofissional. Pós-graduada em Farmacologia Clínica e Farmácia Clínica em Infectologia."
            },
            {
                nome: 'Rodrigo Santos',
                cargo: 'Médico Infectologista',
                foto: rodrigo,
                texto: "Médico internista, infectologista e fundador da Qualis. Doutor em Ciências Médicas, com PhD em Clínica Médica. Coordenador da Comissão de Controle de Infecção do Hospital de Clínicas de Porto Alegre. Professor do Programa de Pós-Graduação da Fundação Universidade de Cardiologia. Foi consultor da ANVISA para medicamentos em 2005."
            },
            {
                nome: 'Taíse Klein',
                cargo: 'Enfermeira',
                foto: taise,
                texto: "Enfermeira do Serviço de Controle de Infecção Hospitalar do Hospital Universitário da Universidade Federal de Santa Catarina. Especialista em Prevenção e Controle de Infecção pela UNIFESP, Mestre e Doutora em Enfermagem pela Universidade Federal de Santa Catarina."
            },
            {
                nome: 'Victor Eduardo Gnoatto',
                cargo: 'Engenheiro químico',
                foto: victor,
                texto: "Engenheiro Químico e Químico Ambiental, é Gerente de Desenvolvimento de Produto para América Latina, Black Belt. Especialista em Lean Six Sigma, atua há mais de 10 anos na indústria termoplástica em segmentos como médico-hospitalar e cuidados com a saúde. Lidera novos desenvolvimentos de produtos para América Latina na Berry."
            },
            {
                nome: 'Bruno Zanardo',
                cargo: 'Médico Infectologista',
                foto: bruno,
                texto: 'Médico Infectologista, formado na UFMS e Residência Médica pelo Hospital Nereu Ramos (SC). Bolsista do CNPq e pesquisador em "Parentalidade e Filhos com Deficiência" e "Homofobia na área da saúde". Experiência na área de diversidade sexual, pais de crianças com deficiência e saúde pública com ênfase em DST/Aids. Iniciou sua atuação na área da Hansenologia. '
            },
            {
                nome: 'Luciane Bonamim',
                cargo: 'Farmacêutica e Bioquímica',
                foto: luciane,
                texto: "Farmacêutica e Bioquímica com Especialização em Farmácia Hospitalar, com mais de 15 anos de experiência em Processos e Qualidade na área hospitalar. Atualmente é Especialista de Produtos da Indústria Farmacêutica Rioquímica (região Sul) com atuação na Linha de Preparo de Pele."
            },
            {
                nome: 'Marinei Ricieri',
                cargo: 'Farmacêutica',
                foto: marinei,
                texto: "Farmacêutica clínica do Programa de Stewardship de Antimicrobianos, especialista líder do Núcleo de Pesquisa do HPP. Mestre em Biotecnologia, tutora da residência multiprofissional e membro da Diretoria Paraná da Sociedade Brasileira de Farmácia Hospitalar."
            },
            {
                nome: 'Fábio de Araújo Motta',
                cargo: 'Médico pediatra',
                foto: fabio,
                texto: "Médico pediatra, Gerente do Núcleo da Qualidade, Núcleo de Pesquisa Clínica e coordenador do Programa de Stewardship de Antimicrobianos do Hospital Pequeno Príncipe. Doutor em Biotecnologia aplicada à saúde da Criança e do Adolescente pela Faculdades Pequeno Príncipe, Mestre em Ciências da Saúde pela PUC-PR. Avaliador Líder do Sistema Brasileiro de Acreditação (ONA)."
            },
        ]
    ]

    return(
        <section id="Palestrantes" className={styles.section}>
            <h2 className={styles.titulo}>Palestrantes confirmados</h2>
            <div className={styles.palestrantes}>
                {palestrantes[0].filter((palestrante, index) => !verMais ? index <= 5 : true).map((palestrante, index) => (
                    <Palestrante key={index} palestrante={palestrante} index={index} />
                ))}
            </div>
            <button onClick={() => setVerMais(!verMais)} className={styles.button}>{verMais ? "Ver menos" : "Ver mais"}</button>
        </section>
    )
}