import styles from '../styles/Palestrantes.module.scss'
import placeholder from '../public/images/placeholder.png'
import Image from 'next/image'

import fabiana from '../public/images/palestrantes/fabiana.jpg'
import rodrigo from '../public/images/palestrantes/rodrigo.jpeg'
import leticia from '../public/images/palestrantes/leticia.jpeg'
import lediane from '../public/images/palestrantes/lidiane.jpeg'
import victor from '../public/images/palestrantes/victor.jpeg'

export default function Palestrantes(prosp) {
    const palestrantes = [
        [
            {
                nome: 'Rodrigo Santos Qualis',
                cargo: 'Médico Infectologista',
                assunto: 'A Revolução das Soluções Inteligentes na prevenção e controle das Infecções Hospitalares: durante e a após a pandemia da COVID-19.',
                empresa: '',
                foto: rodrigo,
            },
            {
                nome: 'Leticia Stefenon',
                cargo: 'Cirurgiã-dentista',
                assunto: 'Métodos inovadores na  prevenção e controle de infecções: Gerenciamentos de múltiplos serviços.',
                empresa: 'HSDS',
                foto: leticia,
            },
            {
                nome: 'Daivana',
                cargo: 'Enfermeira',
                assunto: 'Métodos inovadores na  prevenção e controle de infecções: Gerenciamentos de múltiplos serviços.',
                empresa: 'HSDS',
                foto: placeholder,
            },
            {
                nome: 'Rodrigo Santos',
                cargo: 'Médico Infectologista',
                assunto: 'Métodos inovadores na  prevenção e controle de infecções: Gerenciamentos de múltiplos serviços.',
                empresa: 'HSDS',
                foto: placeholder,
            },
            {
                nome: 'Fábio de Araújo',
                cargo: 'Professor',
                assunto: 'Gerenciamento de riscos: teoria de sistemas complexos e Safety 1 X Safety 2.',
                empresa: 'Unochapecó',
                foto: placeholder,
            }
        ],
        [
            {
                nome: 'Jorge Sampaio',
                cargo: 'Professor',
                assunto: 'Evolução do diagnóstico microbiológico: Novas Tecnologias.',
                empresa: 'UFFS / UDESC',
                foto: placeholder,
            },
            {
                nome: 'Lidiane Riva Pagnussat',
                cargo: '',
                assunto: 'Como medir e apresentar ao gestor o impacto econômico de um programa “Stewardship” e microbianos MMR e a segurança do paciente.',
                empresa: '',
                foto: lediane,
            },
            {
                nome: 'Victor Gnoatto',
                cargo: '',
                assunto: 'Aplicabilidade dos Campos Cirúrgicos Estéril: um impacto no ecossistema hospitalar.',
                empresa: 'Berry',
                foto: victor,
            },
            {
                nome: 'Guilherme Cajueiro',
                cargo: '',
                assunto: 'Aplicabilidade e rendimentos de produtos de desinfecção e antissépticos.',
                empresa: 'Rioquimica',
                foto: placeholder,
            }
        ],
        [
            {
                nome: 'Isabela Pisseti Piccinin',
                cargo: 'Farmacêutica',
                assunto: 'Estruturação de serviços de gestão de suprimentos em hospitais para garantir a segurança do paciente.',
                empresa: '',
                foto: placeholder,
            },
            {
                nome: 'Felipe Dal Pizzol',
                cargo: 'Professor',
                assunto: 'Avanços e perspectivas no campo das inovações em saúde: segurança, tecnologia e sustentabilidade em prevenção e controle de infecções hospitalares.',
                empresa: 'Rioquímica',
                foto: placeholder,
            }
        ]
    ]

    return(
        <section id="Palestrantes" className={styles.section}>
            <h2 className={styles.titulo}>Palestrantes confirmados</h2>
            <div className={styles.palestrantes}>
                {palestrantes[0].map((palestrante, index) => (
                    <div key={index} className={styles.palestrante}>
                        <div className={styles.areaImagem}>
                            <Image className={styles.img} alt="Imagem de perfil do palestrante" src={palestrante.foto} layout="fill" />
                        </div>
                        <h4 className={styles.tituloPalestrante}>{palestrante.nome}</h4>
                        <h5 className={styles.cargo}>{palestrante.cargo}</h5>
                    </div>
                ))}
                {palestrantes[1].map((palestrante, index) => (
                    <div key={index} className={styles.palestrante}>
                        <div className={styles.areaImagem}>
                            <Image className={styles.img} alt="Imagem de perfil do palestrante" src={palestrante.foto} layout="fill" />
                        </div>
                        <h4 className={styles.tituloPalestrante}>{palestrante.nome}</h4>
                        <h5 className={styles.cargo}>{palestrante.cargo}</h5>
                    </div>
                ))}
                {palestrantes[2].map((palestrante, index) => (
                    <div key={index} className={styles.palestrante}>
                        <div className={styles.areaImagem}>
                            <Image className={styles.img} alt="Imagem de perfil do palestrante" src={palestrante.foto} layout="fill" />
                        </div>
                        <h4 className={styles.tituloPalestrante}>{palestrante.nome}</h4>
                        <h5 className={styles.cargo}>{palestrante.cargo}</h5>
                    </div>
                ))}
            </div>
        </section>
    )
}