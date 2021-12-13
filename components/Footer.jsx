import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

export default function Footer(props) {
    return(
        <footer className={styles.footer}>
            <div className="subFooter">
                <h4>25, 26 e 27 de Dezembro</h4>
                <button>
                    CTA BUTTON
                </button>
            </div>
            <div className={styles.realFooter}>
                <h5 className={styles.span}>© 2021 Azeplast. Todos os direitos reservados.</h5>
                <h5 className={styles.span}>
                    <Link href="/">
                        <a className={styles.a}>Termos e condições</a>
                    </Link>
                    |
                    <Link href="/">
                        <a className={styles.a}>Politica de privacidade</a>
                    </Link>
                    |   
                    <Link href="/">
                        <a className={styles.a}>Sitemap</a>
                    </Link>
                </h5>
            </div>
        </footer>
    )
}