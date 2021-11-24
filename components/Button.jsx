import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {
    return(
        <button className={styles.button}>
            <Link href="/#Cadastro">
                <a>{props.children}</a>
            </Link>
        </button>
    )
}