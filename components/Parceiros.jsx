import styles from '../styles/Parceiros.module.scss'
import ufg from '../public/images/parceiros/ufg.png'
import Image from 'next/image'

export default function Parceiros(props) {
    return(
        <section id="Parceiros" className={styles.section}>
            <h2 className={styles.titulo}>Texto da seção</h2>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>

                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>

                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
                <div className={styles.parceiro}>
                    <a href="https://www.ufg.br/" target="_blank">
                        <Image alt="Logo da empresa parceira do evento" src={ufg} className={styles.image} />
                    </a>
                </div>
            </div>
        </section>
    )
}