import styles from '../styles/Parceiros.module.scss'

import septi from '../public/images/parceiros/septi_parceiro.png'
import azeplast from '../public/images/parceiros/azeplast_parceiro.png'
import rioquimica from '../public/images/parceiros/rioquimica_parceiro.png'
import greenbags from '../public/images/parceiros/greenbags_parceiro.png'
import onfinity from '../public/images/parceiros/onfinity_parceiro.png'

import berry from '../public/images/parceiros/berry_parceiro.png'
import qualis from '../public/images/parceiros/qualis_parceiro.png'

import Image from 'next/image'
export default function Parceiros(props) {
    return(
        <section id="Parceiros" className={styles.section}>
            <h2 className={styles.titulo}>Conheça os apoiadores do evento</h2>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Patrocinadores Ouro</h3>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <a href="https://septi.life.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da SEPTI HEALTHCARE" src={septi} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.azeplast.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da AZEPLAT" src={azeplast} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://rioquimica.com.br/pt/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da RIOQUIMICA" src={rioquimica} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://onfinity.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da GREEN BAGS" src={greenbags} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://onfinity.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da ONFINITY" src={onfinity} className={styles.image} />
                    </a>
                </div>
            </div>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Apoiadores Ouro</h3>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <a href="https://qualisinfectologia.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da BERRY" src={berry} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://qualisinfectologia.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da BERRY" src={qualis} className={styles.image} />
                    </a>
                </div>
            </div>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Apoiadores Prata</h3>
            </div>
             <div className={styles.parceiros}>

            </div>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Patrocinadores Bronze</h3>
            </div>
            <div className={styles.parceiros}>
            </div>
        </section>
    )
}