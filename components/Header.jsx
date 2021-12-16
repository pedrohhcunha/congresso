import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import Button from './Button.jsx'
import Image from 'next/image'
import logoParaFundoBranco from '../public/images/logos/logoParaFundoBranco.png'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {

    const [menuActive, setMenuActive] = useState(false);

    return(
        <header className={styles.header}>
            <div className={styles.areaImg}>
                <Image className={styles.imageHeader} src={logoParaFundoBranco} alt="Logo Oficial do 1° Congresso Sul brasileiro de Inovação em Saúde"></Image>
            </div>
            <nav className={`${styles.nav} ${menuActive ? styles.active : ''}`}>
                <ul className={styles.lista}>
                    <li className={styles.itemLista}>
                        <Link href="/#Inicio"><a>Inicio</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/#Sobre"><a>Sobre o congresso</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/#Cronograma"><a>Cronograma</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/#Palestrantes"><a>Palestrantes</a></Link>
                    </li>
                    <li className={styles.itemLista}>
                        <Link href="/#Trabalhos"><a>Submissão de trabalhos</a></Link>
                    </li>
                </ul>
                <div className={styles.areaButton} >
                    <Button tremer>GARANTA SEU INGRESSO</Button>
                </div>
            </nav>
            <FontAwesomeIcon onClick={() => setMenuActive(!menuActive)} icon={faBars} className={styles.iconController}/>
        </header>
    )
}