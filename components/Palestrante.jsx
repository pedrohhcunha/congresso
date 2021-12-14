import styles from '../styles/Palestrante.module.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Palestrante(props) {

    const [isVisible, setIsVisible] = useState(false);

    const elementIsVisible = el => {        
        if(el.getBoundingClientRect().bottom <= window.innerHeight) {
            setIsVisible(true)
            console.log("viu")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => elementIsVisible(document.querySelector(`#palestranteId${props.index}`)));
    },[]);

    return(
        <div id={`palestranteId${props.index}`} className={`${styles.palestrante} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.areaImagem}>
                <Image className={styles.img} alt="Imagem de perfil do palestrante" src={props.palestrante.foto} layout="fill" />
            </div>
            <h4 className={styles.tituloPalestrante}>{props.palestrante.nome}</h4>
            <h5 className={styles.cargo}>{props.palestrante.cargo}</h5>
        </div>
    )
}