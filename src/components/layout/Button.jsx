import styles from './Button.module.css'

function Button({ text, page, handle_click }) {
    return (
        <button onClick={handle_click} className={styles[page]}>
            {text}
        </button>
    )
}

export default Button 