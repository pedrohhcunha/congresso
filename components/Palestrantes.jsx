import styles from '../styles/Palestrantes.module.scss'
import placeholder from '../public/images/placeholder.png'
import Image from 'next/image'

export default function Palestrantes(prosp) {
    return(
        <section id="Palestrantes" className={styles.section}>
            <h2 className={styles.titulo}>Texto da seção</h2>

            <div className={styles.palestrantes}>
                <div className={styles.palestrante}>
                    <div className={styles.areaImagem}>
                        <Image alt="Imagem de perfil do palestrante" src={placeholder} layout="fill" />
                    </div>
                    <h4 className={styles.tituloPalestrante}>Nome palestrante</h4>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa ea hic adipisci repudiandae sunt quasi, iusto vel porro? Facere quibusdam natus ducimus maxime numquam nihil alias explicabo? Quod, mollitia!</p>
                </div>
            </div>
        </section>
    )
}