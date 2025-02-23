import Main from "../ui/Main"

// Assets
import styles from './Support.module.css'

function Suport() {
    return (
        <Main page='support'>
            <form action="https://formsubmit.co/1arthurgehlen@gmail.com" method="POST" className={styles.form}>
                <div className="Email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="Email"
                        placeholder="exemplo@gmail.com"
                        required />
                </div>
                <div className="Nome">
                    <label htmlFor="title">Seu Nome:</label>
                    <input
                        type="text"
                        placeholder='...'
                        name="Nome"
                        required />
                </div>
                <div className="problem_description">
                    <label htmlFor="Descrição">Problema:</label>
                    <textarea
                        name="Descrição"
                        required
                    >
                    </textarea>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </Main>
    )
}

export default Suport