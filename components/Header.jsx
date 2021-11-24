import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import Button from './Button.jsx'
import Image from 'next/image'
import logoParaFundoBranco from '../public/images/logos/logoParaFundoBranco.png'
import { useState, useEffect } from 'react'

export default function Header(props) {
    
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        setScrollPosition(scrollPosition)
    }, []);
    return(
        <header className={`${styles.header} ${scrollPosition >= 5 ? styles.scroll : ''}`}>
            <div className={styles.areaImg}>
                <Image className={styles.imageHeader} src={logoParaFundoBranco} alt="Logo Oficial do evento"></Image>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <li className={styles.itemLista}>
                        <Link href="/#Inicio"><a>Inicio</a></Link>
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
                <Button>CTA button</Button>
            </nav>
        </header>
    )
}