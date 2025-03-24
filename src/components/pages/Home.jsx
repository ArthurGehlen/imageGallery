// Hooks
import { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

// Assets
import styles from './Home.module.css'
import empty_container_img from '../../imgs/empty_container_img.svg'
import Message from '../ui/Message'

function Home() {
    const [images, setImages] = useState([])
    const [message, setMessage] = useState('')

    const delete_card = (id) => {
        const stored_images = JSON.parse(localStorage.getItem("cardDB")) || []
        const updated_images = stored_images.filter((image) => image.id !== id)
        localStorage.setItem("cardDB", JSON.stringify(updated_images))
        setImages(updated_images)
    }

    useEffect(() => {
        const stored_images = JSON.parse(localStorage.getItem("cardDB")) || []
        setImages(stored_images)

        const success_message = localStorage.getItem("successMessage")
        if (success_message) {
            setMessage(success_message)
            setTimeout(() => {
                setMessage('')
                localStorage.removeItem("successMessage")
            }, 3000)
        }
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
                    {message && <Message msg={message} />}
                    {images.map((img) => (
                        <div key={img.id} className={styles.card}>
                            <button onClick={() => delete_card(img.id)} className='delete_button'>
                                <IoMdClose />
                            </button>
                            <img src={img.image} alt={`Imagem do card ${img.id}`} />
                            <h2>{img.title}</h2>
                            <p>{img.description}</p>
                            {img.add_date === true &&
                                <p className={styles.date}>Data: {img.date}</p>}
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Home