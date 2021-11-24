import styles from '../styles/Sobre.module.scss'
import Button from './Button'
import Image from 'next/image'
import placeholder from '../public/images/sobre.jpg'

export default function Sobre(props) {
    return(
        <section id="Sobre" className={styles.section}>
            <div className={styles.areaImagem}>
                <Image layout="fill" src={placeholder} objectFit="cover"/>
            </div>
            <div className={styles.areaInfo}>
                <p className={styles.p}>Quanto maior o tempo de permanência nas unidades de saúde, maiores serão as chances de riscos de contaminação, principalmente em hospitais que tratam de doenças crônicas. As infecções mais comuns, geralmente, são a urinária e a do trato respiratório, ocorrendo, geralmente, após as cirurgias. Para combater estes problemas, a Agência Nacional de Vigilância Sanitária (Anvisa) criou protocolos de prevenção e controle para os hospitais brasileiros. Além de segui-los com bastante rigor, o Hospital Santa Lúcia também cria, constantemente, campanhas de conscientização para seu corpo médico e visitantes, com o objetivo de alertá-los sobre cuidados com a infecção hospitalar.</p>
                <Button>Participar do evento</Button>
            </div>
        </section>
    )
}