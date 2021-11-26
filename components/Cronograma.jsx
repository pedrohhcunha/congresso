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
        slide2: 1,
        slide3: 1,
    }
    return(
        <section id="Cronograma" className={styles.section}>
            <h2 className={styles.titulo}>Acompanhe a programação</h2>
            <div className={styles.subSection}>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>19/05</h3>
                    <p className={styles.p}>
                        Abertura do evento, palestras e mesa-redonda <br /><br />
                        Tema principal: Metodologias de prevenção e controle de infecções hospitalares
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
                            <br /><br />
                            <strong>Mesa-redonda</strong>
                            <br />
                            Métodos inovadores na  prevenção e controle de infecções: Gerenciamentos de múltiplos serviços
                            <br /><br />
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide1 * 100}%)`}} className={styles.content}>
                            <strong>21h - Mesa-redonda</strong>
                            <br />
                            Gerenciamento de riscos: teoria de sistemas complexos e Safety 1 X Safety 2
                            <br /><br />
                            <strong>21h40 - Palestra</strong>
                            <br />
                            Aplicabilidade e rendimentos de produtos de desinfecção e antissépticos
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
            <div className={styles.areaContentDia}>
                    <div className={styles.contents}>
                        <p style={{transform: `translateX(-${sliders.slide2 * 100}%)`}} className={styles.content}>
                            <strong>9h30 - Palestra</strong>
                            <br />
                            Evolução do diagnóstico microbiológico: Novas tecnologias
                            <br /> <br />
                            <strong>10h40 - Palestra</strong>
                            <br />
                            Como medir e apresentar ao gestor o impacto econômico de um programa “Stewardship” e microbianos MMR e a segurança do paciente
                            <br /><br />
                            <strong>13h30 - Palestra</strong>
                            <br />
                            Biofilmes de Instrumental Cirúrgico
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide2 * 100}%)`}} className={styles.content}>
                            <strong>14h20 - Palestra</strong>
                            <br />
                            Aplicabilidade dos Campos Cirúrgicos Estéril: um impacto no ecossistema hospitalar
                            <br /><br />
                            <strong>15h30 - Palestra</strong>
                            <br />
                            Apresentação dos 10 resumos mais bem avaliados, 02 trabalhos de cada área temática.
                        </p>
                    </div>
                    <div className={styles.slideControl}>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide1: sliders.slide2 > 0 ? sliders.slide2 -= 1 : sliders.slide2})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide1: sliders.slide2 < maxSliders.slide2 ? sliders.slide2 += 1 : sliders.slide2})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                </div>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>20/05</h3>
                    <p className={styles.p}>
                    Palestras <br /> <br />
                    Tema principal: Novas tecnologias
                    </p>
                </div>
            </div>
            <div className={styles.subSection}>
                <div className={styles.cardDia}>
                    <h3 className={styles.dia}>21/05</h3>
                    <p className={styles.p}>
                        Cases, Apresentação dos trabalhos submetidos e encerramento do evento <br /><br />
                        Tema principal: Estruturação e gestão de serviços em hospitais
                    </p>
                </div>
                <div className={styles.areaContentDia}>
                    <div className={styles.contents}>
                        <p style={{transform: `translateX(-${sliders.slide3 * 100}%)`}} className={styles.content}>
                            <strong>9h - Case de sucesso</strong>
                            <br />
                            Estruturação de serviços de gestão de suprimentos em hospitais
                            <br /> <br />
                            <strong>09h40 - Case de sucesso</strong>
                            <br />
                            Trabalho interdisciplinar nos ambientes de saúde e seu impacto nas tomadas de decisões
                            <br /><br />
                            <strong>10h30 - Case de sucesso</strong>
                            <br />
                            Avanços e perspectivas no campos das inovações em saúde: segurança, tecnologia e sustentabilidade em prevenção e controle de infecções hospitalares 
                        </p>
                        <p style={{transform: `translateX(-${sliders.slide3 * 100}%)`}} className={styles.content}>
                            <strong>11h30 - Encerramento do evento</strong>
                            <br />
                            Premiações dos Trabalhos Científicos <br />
                            Premiações do {`"Cases de Sucesso"`}
                        </p>
                    </div>
                    <div className={styles.slideControl}>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide1: sliders.slide3 > 0 ? sliders.slide3 -= 1 : sliders.slide3})
                            console.log(sliders)
                        }}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className={styles.icon} onClick={() => {
                            setSliders({...sliders, slide1: sliders.slide3 < maxSliders.slide3 ? sliders.slide3 += 1 : sliders.slide3})
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