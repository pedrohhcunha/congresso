import { useState } from 'react'
import styles from '../styles/Cronograma.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function Cronograma(props) {

    const [sliders, setSliders] = useState({
        slide1: 0,
        slide2: 0,
        slide3: 0,
    });

    const maxSliders = {
        slide1: 1,
        slide2: 2,
        slide3: 1,
    }
    return(
        <section id="Cronograma" className={styles.section}>
            <h2 className={styles.titulo}>Acompanhe a programação</h2>
            <div className={styles.subSection}>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>26/05</h3>
                    <p className={styles.p}>
                    Abertura do evento, palestras e mesa-redonda <br /><br />
                    <strong>Tema principal:</strong> Metodologias de prevenção e controle de infecções hospitalares
                    </p>
                </div>
                <div className={styles.areaContentDia}>
                    <div className={styles.contents}>
                        <p style={{transform: `translateX(-${sliders.slide1 * 100}%)`}} className={styles.content}>
                            <strong>18h - Abertura do evento</strong>
                            <br /> <br />
                            <strong>19h - Palestra</strong>
                            <br />
                            A Revolução das Soluções Inteligentes na prevenção e controle das Infecções Hospitalares: durante e a após a pandemia da COVID-19
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide1 * 100}%)`}} className={styles.content}>
                            <strong>19h50 Mesa-redonda</strong>
                            <br />
                            Métodos inovadores na prevenção e controle de infecções: Gerenciamentos de múltiplos serviços
                            <br /><br />
                            <strong>21h - Mesa-redonda</strong>
                            <br />
                            O aumento das infecções por bactérias multirresistentes na pandemia Covid-19:Quais as evidências e como controlar.
                        </p>
                    </div>
                    <div className={styles.slideControl}>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide1: sliders.slide1 > 0 ? sliders.slide1 -= 1 : sliders.slide1})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide1: sliders.slide1 < maxSliders.slide1 ? sliders.slide1 += 1 : sliders.slide1})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.subSection}>
            <div className={`${styles.areaContentDia} ${styles.tripleContents}`}>
                    <div className={styles.contents}>
                        <p style={{transform: `translateX(-${sliders.slide2 * 100}%)`}} className={styles.content}>
                            <strong>9h - Palestra</strong>
                            <br />
                            Gerenciamento de riscos: teoria de sistemas complexos e Safety 1 X Safety 2
                            <br /> <br />
                            <strong>9h45 - Palestra</strong>
                            <br />
                            Como medir e apresentar ao gestor o impacto econômico de um programa “Stewardship” e microbianos MMR e a segurança do paciente
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide2 * 100}%)`}} className={styles.content}>
                            <strong>13h30 - Palestra</strong>
                            <br />
                            Aplicabilidade dos Campos Cirúrgicos Estéril: um impacto no ecossistema hospitalar
                            <br /><br />
                            <strong>14h30 - Palestra</strong>
                            <br />
                            Medidas de controle e prevenção desinfecção de ambiente
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide2 * 100}%)`}} className={styles.content}>
                            <strong>15h45 - Palestra</strong>
                            <br />
                            Higiene, limpeza e desinfecção de ambientes críticos, áreas semi-limpas e limpas.
                            <br /><br />
                            <strong>16h30 - Apresentação</strong>
                            <br />
                            Apresentação dos 10 resumos mais bem avaliados pela equipe de pareceristas.
                        </p>
                    </div>
                    <div className={styles.slideControl}>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide2: sliders.slide2 > 0 ? sliders.slide2 -= 1 : sliders.slide2})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide2: sliders.slide2 < maxSliders.slide2 ? sliders.slide2 += 1 : sliders.slide2})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                </div>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>27/05</h3>
                    <p className={styles.p}>
                    Palestras <br /> <br />
                    <strong>Tema principal:</strong> Novas tecnologias
                    </p>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>28/05</h3>
                    <p className={styles.p}>
                    Cases, Apresentação dos trabalhos submetidos e encerramento do evento <br /><br />
                     <strong>Tema principal:</strong> Estruturação e gestão de serviços em hospitais
                    </p>
                </div>
                <div className={styles.areaContentDia}>
                    <div className={styles.contents}>
                        <p style={{transform: `translateX(-${sliders.slide3 * 100}%)`}} className={styles.content}>
                            <strong>9h - Palestra</strong>
                            <br />
                            Estruturação de serviços de gestão de suprimentos em hospitais para garantir a segurança do paciente.
                            <br /> <br />
                            <strong>09h40 - Case de sucesso</strong>
                            <br />
                            Trabalho interdisciplinar nos ambientes de saúde e seu impacto nas tomadas de decisões.
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide3 * 100}%)`}} className={styles.content}>
                            <strong>10h30 - Case de sucesso</strong>
                            <br />
                            Avanços e perspectivas no campo da inovação em saúde: segurança, tecnologia e sustentabilidade em prevenção e controle de infecções hospitalares.
                            <br /> <br />
                            <strong>11h30 - Encerramento do evento</strong>
                            <br />
                            Premiações dos Trabalhos Científicos <br />
                            Premiações dos “Cases de Sucesso”
                        </p>
                    </div>
                    <div className={styles.slideControl}>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide3: sliders.slide3 > 0 ? sliders.slide3 -= 1 : sliders.slide3})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide3: sliders.slide3 < maxSliders.slide3 ? sliders.slide3 += 1 : sliders.slide3})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}