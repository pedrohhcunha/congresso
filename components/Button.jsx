import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {
    return(
        <Link href="/#Cadastro">
            <a className={styles.button}>{props.children}</a>
        </Link>
    )
}