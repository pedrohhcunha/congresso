import { useState } from 'react'
import styles from '../styles/Formulario.module.scss'

export default function Formulario(props) {

    const [dataForm, setDataForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        profissao: ""
    })

    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target[event.target.selectedIndex] ? event.target[event.target.selectedIndex].value : event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(dataForm)
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.areaInput}>
                <label className={styles.label}>Nome</label>
                <input onChange={event => handleInput(event)} type="text" name="nome" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Email</label>
                <input onChange={event => handleInput(event)} type="email" name="email" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Telefone</label>
                <input onChange={event => handleInput(event)} type="text" name="telefone" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Profissão</label>
                <select onChange={event => handleInput(event)} className={styles.input} name="profissao" id="">
                    <option value="Selecione">Selecione:</option>
                    <option value="Estudante1">Estudante de curso Técnico, Tecnólogo ou Graduação</option>
                    <option value="Estudante2">Estudante de curso de Pós-Graduação</option>
                    <option value="Médico">Médico(a)</option>
                    <option value="Enfermeiro">Enfermeiro(a)</option>
                    <option value="Outro">Outro(a)</option>
                </select>
            </div>
            <button className={styles.button}>Participar</button>
        </form>
    )
}