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

export default function Palestrantes(prosp) {
    const palestrantes = [
        [
            {
                nome: 'Carolina Ponzi',
                cargo: 'Médica infectologista',
                foto: placeholder,
            },
            {
                nome: 'Daivana Kunz',
                cargo: 'Enfermeira',
                foto: placeholder,
            },
            {
                nome: 'Fabiana Meneghetti Dallacosta',
                cargo: 'Enfermeira',
                foto: fabiana,
            },
            {
                nome: 'Gessy',
                cargo: 'Enfermeira',
                foto: placeholder,
            },
            {
                nome: 'Isabela Pisseti Piccinin',
                cargo: 'Farmacêutica',
                foto: isabela,
            },
            {
                nome: 'Leticia Stefenon',
                cargo: 'Cirurgiã-dentista',
                foto: leticia,
            },
            {
                nome: 'Lidiane Riva Pagnussat',
                cargo: 'Farmacêutica',
                foto: lediane,
            },
            {
                nome: 'Rodrigo Santos',
                cargo: 'Médico Infectologista',
                foto: rodrigo,
            },
            {
                nome: 'Taíse Klein',
                cargo: 'Enfermeira',
                foto: taise,
            },
            {
                nome: 'Victor Eduardo Gnoatto',
                cargo: 'Engenheiro químico',
                foto: victor,
            }
        ]
    ]

    return(
        <section id="Palestrantes" className={styles.section}>
            <h2 className={styles.titulo}>Palestrantes confirmados</h2>
            <div className={styles.palestrantes}>
                {palestrantes[0].map((palestrante, index) => (
                    <Palestrante key={index} palestrante={palestrante} index={index} />
                ))}
            </div>
        </section>
    )
}