// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import Main from "../ui/Main"
import Message from '../ui/Message'

// Assets
import styles from './AddCard.module.css'

function AddCard() {
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [add_date, setAddDate] = useState(false)
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("")
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
    }

    function is_under_10(num) {
        return num < 10 ? `0${num}` : num
    }

    const display_date = () => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let seconds = date.getSeconds()

        setDate(`${day}/${is_under_10(month)}/${year} | ${is_under_10(hour)}:${is_under_10(minute)}:${is_under_10(seconds)}`)
    }

    const set_date = () => {
        const new_add_date = !add_date
        setAddDate(new_add_date)

        if (new_add_date) {
            setMessage("Data adicionada com sucesso!")  
        } else {
            setMessage("Data removida com sucesso!") 
        }
        
        display_date()
    }

    const handle_submit = (event) => {
        event.preventDefault()

        const new_card = { id: Date.now(), title, description, image: image, add_date: add_date, date: date}

        const updated_cards = JSON.parse(localStorage.getItem("cardDB")) || []
        updated_cards.push(new_card);
        localStorage.setItem("cardDB", JSON.stringify(updated_cards))

        navigate("/")
    }

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
                        onChange={(e) => setDescription(e.target.value)} >
                    </textarea>
                </div>
                <button type="submit">Criar Card</button>
                <hr />
            </form>
            <div className={styles.atributes}>
                <button onClick={set_date}>Adicionar Data</button>
            </div>
            {message && <Message msg={message} type='success' />}
        </Main>
    )
}

export default AddCard
