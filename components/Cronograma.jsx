import styles from '../styles/Cronograma.module.scss'

export default function Cronograma(props) {
    return(
        <section className={styles.section}>
            <div className={styles.subSection}>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>20/05</h3>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum hic error consectetur maxime minima vitae at ullam vel nemo voluptatibus, nulla sit necessitatibus aliquid et nostrum qui asperiores consequatur?</p>
                </div>
                <div className={styles.areaContentDia}>
                    <p className={styles.content}>
                        Eixo 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                        <br />  <br /> Eixo 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                        <br />  <br /> Eixo 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                    </p>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.areaContentDia}>
                    <p className={styles.content}>
                        Eixo 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                        <br />  <br /> Eixo 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                        <br />  <br /> Eixo 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                    </p>
                </div>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>20/05</h3>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum hic error consectetur maxime minima vitae at ullam vel nemo voluptatibus, nulla sit necessitatibus aliquid et nostrum qui asperiores consequatur?</p>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>20/05</h3>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolorum hic error consectetur maxime minima vitae at ullam vel nemo voluptatibus, nulla sit necessitatibus aliquid et nostrum qui asperiores consequatur?</p>
                </div>
                <div className={styles.areaContentDia}>
                    <p className={styles.content}>
                        Eixo 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                        <br />  <br /> Eixo 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                        <br />  <br /> Eixo 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae amet, minima, officia vitae voluptatum aut velit quod est libero, doloremque ducimus ullam possimus tempore ab ipsam dolores obcaecati iusto.
                    </p>
                </div>
            </div>
        </section>
    )
}