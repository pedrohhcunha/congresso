import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {
    return(
        <button className={styles.button}>
            <Link href="/#Cadastro">
                <a className={styles.link}>{props.children}</a>
            </Link>
        </button>
    )
}