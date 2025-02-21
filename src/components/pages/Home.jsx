// Libraries
import { Link } from 'react-router-dom'

// Assets
import styles from './Home.module.css'
import empty_container_img from '../../imgs/empty_container_img.svg'

function Home() {
    return (
        <main className={styles.main}>
            <img src={empty_container_img} alt="Container Vazio" />
            <h2>
                Ops! Parece que ainda não temos nada aqui. <br />
                Que tal começar adicionando algo?
            </h2>
            <Link to='/add_image'>Adicionar Imagem</Link>
        </main>
    )
}

export default Home