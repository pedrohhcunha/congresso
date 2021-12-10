import styles from '../styles/Parceiros.module.scss'
import qualis from '../public/images/parceiros/qualis.png'
import unimed from '../public/images/parceiros/unimed.png'
import hsvp from '../public/images/parceiros/hsvp.png'
import hrsp from '../public/images/parceiros/hrsp.png'
import uffs from '../public/images/parceiros/uffs.png'
import unochapeco from '../public/images/parceiros/unochapeco.png'
import udesc from '../public/images/parceiros/udesc.png'
import fapesc from '../public/images/parceiros/fapesc.png'
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
                    <a href="https://qualisinfectologia.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da QUALIS" src={qualis} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unimed.coop.br/site/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNIMED" src={unimed} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://hsvp.org.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial do HSVP" src={hsvp} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.hrsp.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial do HRSP" src={hrsp} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.uffs.edu.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UFFS" src={uffs} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unochapeco.edu.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNOCHAPECO" src={unochapeco} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.udesc.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UDESC" src={udesc} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.fapesc.sc.gov.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da FAPESC" src={fapesc} className={styles.image} />
                    </a>
                </div>
            </div>
            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Apoiadores Ouro</h3>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <a href="https://qualisinfectologia.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da QUALIS" src={qualis} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unimed.coop.br/site/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNIMED" src={unimed} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://hsvp.org.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial do HSVP" src={hsvp} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.hrsp.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial do HRSP" src={hrsp} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.uffs.edu.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UFFS" src={uffs} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unochapeco.edu.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNOCHAPECO" src={unochapeco} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.udesc.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UDESC" src={udesc} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.fapesc.sc.gov.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da FAPESC" src={fapesc} className={styles.image} />
                    </a>
                </div>
            </div>
            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Apoiadores Prata</h3>
            </div>
             <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <a href="https://qualisinfectologia.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da QUALIS" src={qualis} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unimed.coop.br/site/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNIMED" src={unimed} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://hsvp.org.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial do HSVP" src={hsvp} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.hrsp.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial do HRSP" src={hrsp} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.uffs.edu.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UFFS" src={uffs} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unochapeco.edu.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNOCHAPECO" src={unochapeco} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.udesc.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UDESC" src={udesc} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.fapesc.sc.gov.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da FAPESC" src={fapesc} className={styles.image} />
                    </a>
                </div>
            </div>
            <div className={styles.areaSubtitulo}>
                <h3 className={styles.subtitulo}>Patrocinadores Bronze</h3>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <a href="https://qualisinfectologia.com.br/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da QUALIS" src={qualis} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.unimed.coop.br/site/" rel="noreferrer" target="_blank">
                        <Image alt="Logo oficial da UNIMED" src={unimed} className={styles.image} />
                    </a>
                </div>
            </div>
        </section>
    )
}