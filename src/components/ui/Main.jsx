import empty_container_img from '../../imgs/empty_container_img.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddImage from '../pages/AddImage';

import styles from './Main.module.css'

function Main() {
    return (
        <main className={styles.main}>
            <img src={empty_container_img} alt="Container Vazio" />
            <h2>
                Ops! Parece que ainda não temos nada aqui. <br />
                Que tal começar adicionando algo?
            </h2>
            <Router>
                <Link to='/add_image'>Adicionar Imagem</Link>
                <Routes>
                    <Route path='/add_image' element={<AddImage />}></Route>
                </Routes>
            </Router>
        </main>
    )
}

export default Main 