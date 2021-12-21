import styles from '../styles/Footer.module.scss'

export default function Footer(props) {
    return(
        <footer className={styles.footer}>
            <div className={styles.realFooter}>
                <h5 className={styles.span}>© 2021 CONTIS. Todos os direitos reservados.</h5>
            </div>
        </footer>
    )
}