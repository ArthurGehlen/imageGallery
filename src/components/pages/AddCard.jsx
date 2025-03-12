// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Main from "../ui/Main"

// Assets
import styles from './AddCard.module.css'

function AddCard() {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handle_image_upload = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                const new_image = { id: Date.now(), image: reader.result }
                const updated_images = JSON.parse(localStorage.getItem("imageDB")) || []
                updated_images.push(new_image)
                localStorage.setItem("imageDB", JSON.stringify(updated_images))
                setImage(reader.result)
            };
            reader.onerror = (error) => console.error("Erro ao converter imagem: ", error)
        }
    };
    
    const handle_submit = (event) => {
        event.preventDefault()
        
        const new_card = { id: Date.now(), title, description, image: image }
    
        const updated_cards = JSON.parse(localStorage.getItem("cardDB")) || []
        updated_cards.push(new_card);
        localStorage.setItem("cardDB", JSON.stringify(updated_cards))
    
        navigate("/")
    };    

    return (
        <Main page='add_image'>
            <form className={styles.form} onSubmit={handle_submit}>
                <div className="file">
                    <span>Escolha uma imagem:</span>
                    <label htmlFor="input_file" className={styles.input_file}>Enviar Imagem</label>
                    <input
                            type="file"
                            accept='image/*'
                            id='input_file'
                            onChange={handle_image_upload}
                            required
                    />
                </div>
                <div className="title">
                    <label htmlFor="title">Escreva um título:</label>
                    <input
                        type="text"
                        placeholder='...'
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="description">
                    <label htmlFor="description">Escreva uma descrição:</label>
                    <textarea
                        id="description"
                        placeholder='Tamanho máximo: 150 palavras'
                        value={description}
                        maxLength={150}
                        onChange={(e) => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <button type="submit">Criar Card</button>
                <hr />
            </form>
        </Main>
    )
}

export default AddCard
