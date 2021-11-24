import styles from '../styles/Formulario.module.scss'

export default function Formulario(props) {
    return(
        <form className={styles.form} onSubmit={event => event.preventDefault()}>
            <div className={styles.areaInput}>
                <label className={styles.label}>Campo 1</label>
                <input type="text" name="campo1" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Campo 2</label>
                <input type="text" name="campo2" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Campo 1</label>
                <input type="text" name="campo1" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Campo 2</label>
                <input type="text" name="campo2" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Campo 1</label>
                <input type="text" name="campo1" className={styles.input} />
            </div>
            <div className={styles.areaInput}>
                <label className={styles.label}>Campo 2</label>
                <input type="text" name="campo2" className={styles.input} />
            </div>
            <button className={styles.button}>Participar</button>
        </form>
    )
}