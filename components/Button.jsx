import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {
    return(
        <button onClick={props.onClick ? props.onClick : ''} style={props.style}
            className={`
                ${styles.button}
                ${props.tremer ? styles.tremer : ''}
                ${props.marginBottom ? styles.marginBottom : ''}
                ${props.marginLeft ? styles.marginLeft : ''}
                ${props.branco ? styles.branco : ''}
            `}
        >
            <Link href={props.alternative ? "/#Trabalhos" : "/"}>
                <a className={styles.link}>{props.children}</a>
            </Link>
        </button>
    )
}