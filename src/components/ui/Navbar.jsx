// Hooks
import { Link } from 'react-router-dom'
import { useState } from 'react'

// Assets
import menu_Icon from '../../imgs/menu_icon.svg';
import close_menu_icon from '../../imgs/close_icon.svg'
import styles from './Navbar.module.css'

function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handle_menu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className={styles.navbar}>
            <h1>Image Gallery</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/add_card'>Criar Card</Link>
                </li>
                <li>
                    <Link to='/support'>Suporte</Link>
                </li>
            </ul>
            <button onClick={handle_menu}>
                <img src={menu_Icon} alt="Menu" />
            </button>
            {showMenu &&
                <div className={`${styles.menu} ${props.page}`}>
                    <header>
                        <h1>Image Gallery</h1>
                        <button onClick={handle_menu}>
                            <img src={close_menu_icon} alt="Fechar" />
                        </button>
                    </header>
                    <nav>
                        <ul>
                            <li>
                                <Link onClick={handle_menu} to='/'>Home</Link>
                            </li>
                            <li>
                                <Link onClick={handle_menu} to='/add_card'>Criar Card</Link>
                            </li>
                            <li>
                                <Link onClick={handle_menu} to='/support'>Suporte</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            }
        </nav>
    )
}

export default Navbar