import styles from '../styles/Parceiros.module.scss'
import ufg from '../public/images/parceiros/ufg.png'
import Image from 'next/image'

export default function Parceiros(props) {
    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}>Texto da seção</h2>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
            </div>
            <div className={styles.parceiros}>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
                <div className={styles.parceiro}><Image src={ufg} className={styles.image} /></div>
            </div>
        </section>
    )
}