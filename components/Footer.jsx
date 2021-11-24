import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

export default function Footer(props) {
    return(
        <footer className={styles.footer}>
            <ul className={styles.lista}>
                <li className={styles.itemLista}>
                    <Link href="/"><a>Inicio</a></Link>
                </li>
                <li className={styles.itemLista}>
                    <Link href="/#Sobre"><a>Sobre</a></Link>
                </li>
                <li className={styles.itemLista}>
                    <Link href="/#Diferenciais"><a>Diferenciais</a></Link>
                </li>
                <li className={styles.itemLista}>
                    <Link href="/#Cronograma"><a>Cronograma</a></Link>
                </li>
                <li className={styles.itemLista}>
                    <Link href="/#Palestrantes"><a>Palestrantes</a></Link>
                </li>
                <li className={styles.itemLista}>
                    <Link href="/#Parceiros"><a>Parceiros</a></Link>
                </li>
            </ul>
            <div className={styles.realFooter}>
                <h5 className={styles.span}>© 2021 Azeplast. Todos os direitos reservados.</h5>
                <h5 className={styles.span}>
                    <a href="">Termos e condições</a> | <a href="">Politica de privacidade</a> | <a href="">Sitemap</a>
                </h5>
            </div>
        </footer>
    )
}