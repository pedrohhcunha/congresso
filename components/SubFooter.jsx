import styles from '../styles/SubFooter.module.scss'
import Button from './Button'
import logo from '../public/images/logos/logoParaFundoRoxo.png'
import Image from  'next/image'
import Link from 'next/link'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SubFooter(props) {
    return(
        <section className={styles.section}>
            <div className={styles.areaLogo}>
                <Image src={logo} className={styles.image} />
            </div>
            <h2>25, 26 e 27 de dezembro</h2>
            <div className={styles.socialMedia}>
                <Link href="https://www.instagram.com/contisbrasil/" target="__blank">
                    <a className={styles.rede}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </Link>
                <Link href="https://www.facebook.com/contisbrasil" target="__blank">
                    <a className={styles.rede}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/company/77623447/" target="__blank">
                    <a className={styles.rede}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </Link>
            </div>
            <Button style={{
                backgroundColor: 'var(--blue)',
                color: 'var(--white)',
            }} onClick={props.openModal} >Participar Agora</Button>
        </section>
    )
}