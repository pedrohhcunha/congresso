import { useState } from 'react'
import styles from '../styles/Formulario.module.scss'
import axios from 'axios'

export default function Formulario(props) {

    const [dataForm, setDataForm] = useState({
        nome: "",
        email: "",
    })

    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target[event.target.selectedIndex] ? event.target[event.target.selectedIndex].value : event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(dataForm)

        axios.post('/api/convert', dataForm).then(response => {
            console.log(response.data)
            props.updateStatus()
        })
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
            <button className={styles.button}>Participar</button>
        </form>
    )
}