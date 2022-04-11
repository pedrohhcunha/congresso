import { useState } from 'react'
import styles from '../styles/Formulario.module.scss'
import axios from 'axios'
import InputMask from "react-input-mask";

export default function Formulario(props) {

    const [dataForm, setDataForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        profissao: ""
    })

    const [error, setError] = useState(null)

    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target[event.target.selectedIndex] ? event.target[event.target.selectedIndex].value : event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        
        if(dataForm.nome && dataForm.email && dataForm.telefone && dataForm.profissao){
            axios.post('/api/convert', dataForm).then(response => {
                console.log(response.data)
                if(response.data.success){
                    props.updateStatus()
                    setError(null)
                } else {
                    setError(response.data.message)
                }
            })
        } else {
            setError("Por favor, preencha todos os campos")
        }
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
                <InputMask value={dataForm.telefone} mask="(99) 99999-9999" onChange={event => handleInput(event)} type="text" name="telefone" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Profissão</label>
                <select onChange={event => handleInput(event)} className={styles.input} name="profissao" id="">
                    <option value="Selecione">Selecione:</option>
                    <option value="Estudante1">Estudante de curso Técnico, Tecnólogo ou Graduação</option>
                    <option value="Estudante2">Estudante de curso de Pós-Graduação</option>
                    <option value="Médico">Médico(a)</option>
                    <option value="Enfermeiro">Enfermeiro(a)</option>
                    <option value="Farmacêutico">Farmacêutico(a)</option>
                    <option value="Outro">Outro(a)</option>
                </select>
            </div>
            <button className={styles.button}>Ver ingressos</button>
            {error ?
                <div className={styles.errorDiv}>
                    <span className={styles.span}>{error}</span>
                </div>
            : ""}
        </form>
    )
}