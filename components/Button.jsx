import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {
    return(
        <button style={props.style} className={`${styles.button} ${props.tremer ? styles.tremer : ''}`}>
            <Link href={props.alternative ? "/#Trabalhos" : "/#Cadastro"}>
                <a className={styles.link}>{props.children}</a>
            </Link>
        </button>
    )
}