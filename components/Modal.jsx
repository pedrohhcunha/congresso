import { useState } from 'react'
import styles from '../styles/Modal.module.scss'
import Formulario from './Formulario'
import { useEffect } from 'react'
import Head from 'next/head'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Modal(props) {
    const [statusProgress, setStatusProgress] = useState(0);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, []);
    return(
        <>
            <Head>
                {loaded &&
                    <script async src={`https://www.even3.com.br/widget/js?e=contis&t=ticket`}></script>
                }
            </Head>
            <aside className={`${styles.aside} ${props.isOpen ? styles.active : ''} ${statusProgress >= 1 ? styles.evenAtual : ''}`}>
                <div className={styles.modal}>
                    {statusProgress === 0 && 
                        <Formulario updateStatus={() => setStatusProgress(1)} />
                    }
                    <div id="even3-widget-ticket" height="auto" className={styles.even}></div>
                </div>
                <div onClick={props.closeModal} className={styles.closeModal}>
                    <FontAwesomeIcon className={styles.iconClose} icon={faTimes}/>
                </div>
            </aside>
        </>
    )
}