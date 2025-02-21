import styles from './Main.module.css'

function Main(props) {
    return <main className={`${styles.main} ${styles[props.page]}`}>{props.children}</main>
}

export default Main 