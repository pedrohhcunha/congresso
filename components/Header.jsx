import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import Button from './Button.jsx'
import Image from 'next/image'
import logoParaFundoBranco from '../public/images/logos/logoParaFundoBranco.png'
export default function Header(props) {
    return(
        <header className={styles.header}>
            <div className={styles.areaImg}>
                <Image className={styles.imageHeader} src={logoParaFundoBranco} alt="Logo Oficial do evento"></Image>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <li className={styles.itemLista}>
                        <Link href="/"><a>Inicio</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/"><a>Sobre</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/"><a>Diferenciais</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/"><a>Cronograma</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/"><a>Palestras</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/"><a>Parceiros</a></Link>
                    </li>
                </ul>
                <Button>CTA button</Button>
            </nav>
        </header>
    )
}