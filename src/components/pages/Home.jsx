// Hooks
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Assets
import styles from './Home.module.css'
import empty_container_img from '../../imgs/empty_container_img.svg'

function Home() {
    const [images, setImages] = useState([])

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem("cardDB")) || []
        setImages(storedImages);
    }, [])

    return (
        <main>
            {images.length === 0 ? (
                <div className={styles.main}>
                    <img src={empty_container_img} alt="Container Vazio" />
                    <h2>
                        Ops! Parece que ainda não temos nada aqui. <br />
                        Que tal começar adicionando algo?
                    </h2>
                    <Link to='/add_card' className={styles.createCardButton}>Criar Card</Link>
                </div>
            ) : (
                <div className={styles.main_with_cards}>
                    {images.map((img) => (
                        <div key={img.id} className={styles.card}>
                            <img src={img.image} alt="Imagem salva" />
                            <h2>{img.title}</h2>
                            <p>{img.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Home