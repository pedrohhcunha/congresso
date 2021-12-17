import styles from '../styles/SubFooter.module.scss'
import Button from './Button'
import logo from '../public/images/logos/logoParaFundoBranco.png'
import Image from  'next/image'
export default function SubFooter(props) {
    return(
        <section className={styles.section}>
            <div className={styles.areaLogo}>
                <Image src={logo} className={styles.image} />
            </div>
            <h2>25, 26 e 27 de Dezembro</h2>
            <Button style={{
                backgroundColor: 'var(--blue)',
                color: 'var(--white)',
            }} onClick={props.openModal} >Participar Agora</Button>
        </section>
    )
}