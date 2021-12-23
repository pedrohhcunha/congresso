import styles from '../styles/Parceiros.module.scss'

import septi from '../public/images/parceiros/septi_parceiro.png'
import azeplast from '../public/images/parceiros/azeplast_parceiro.png'
import rioquimica from '../public/images/parceiros/rioquimica_parceiro.png'
import greenbags from '../public/images/parceiros/greenbags_parceiro.png'
import onfinity from '../public/images/parceiros/onfinity_parceiro.png'
import wk from '../public/images/parceiros/wk_parceiro.png'
import transconda from '../public/images/parceiros/transconda_parceiro.png'
import pollen from '../public/images/parceiros/pollen_parceiro.png'
import unochapeco from '../public/images/parceiros/unochapeco_parceiro.png'
import hrsp from '../public/images/parceiros/hrsp_parceiro.png'
import hcr from '../public/images/parceiros/hcr_parceiro.png'
import hsds from '../public/images/parceiros/hsds_parceiro.png'

import berry from '../public/images/parceiros/berry_parceiro.png'
import qualis from '../public/images/parceiros/qualis_parceiro.png'
import hust from '../public/images/parceiros/hust_parceiro.png'
import unimed from '../public/images/parceiros/unimed_parceiro.png'

import fapesc from '../public/images/parceiros/fapesc_parceiro.png'
import uffs from '../public/images/parceiros/uffs_parceiro.png'
import unoesc from '../public/images/parceiros/unoesc_parceiro.png'
import hcpf from '../public/images/parceiros/hcpf_parceiro.png'
import udesc from '../public/images/parceiros/udesc_parceiro.png'


import facesc from '../public/images/parceiros/facesc_parceiro.png'

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
                    <Image alt="Logo oficial da ONFINITY" src={onfinity} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da SEPTI HEALTHCARE" src={septi} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da AZEPLAT" src={azeplast} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da WEIKKI" src={wk} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da GREEN BAGS" src={greenbags} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da RIOQUIMICA" src={transconda} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da RIOQUIMICA" src={rioquimica} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da RIOQUIMICA" src={pollen} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da RIOQUIMICA" src={unochapeco} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da HRSP" src={hrsp} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da HCR" src={hcr} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da HSDS" src={hsds} className={styles.image} />
                </div>
            </div>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Apoiadores Ouro</h3>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da BERRY" src={berry} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da BERRY" src={qualis} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da BERRY" src={hust} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da BERRY" src={unimed} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da HCPS" src={hcpf} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da udesc" src={udesc} className={styles.image} />
                </div>
            </div>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Apoiadores Prata</h3>
            </div>
             <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da UFFS" src={uffs} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da BERRY" src={fapesc} className={styles.image} />
                </div>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da unoesc" src={unoesc} className={styles.image} />
                </div>
            </div>

            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Patrocinadores Bronze</h3>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <Image alt="Logo oficial da BERRY" src={facesc} className={styles.image} />
                </div>
            </div>
        </section>
    )
}