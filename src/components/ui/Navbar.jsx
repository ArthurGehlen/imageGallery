import { Link } from 'react-router-dom'

import menu_Icon from '../../imgs/menu_icon.svg';
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1>Image Gallery</h1>
            <ul>
                <li>
                    <Link to='/add_image'>Adicionar Imagem</Link>
                </li>
                <li>
                    <Link to='/support'>Suporte</Link>
                </li>
            </ul>
            <img src={menu_Icon} alt="Menu" />
        </nav>
    )
}

export default Navbar