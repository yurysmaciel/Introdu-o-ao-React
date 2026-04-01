import { useState } from "react"
import "./login.css"

export default function LoginPage() {
    const [titulo, setTitulo] = useState(false)
    const [modalIsVisible, setModalIsVisible] = useState(false)

    //Logica do component
    /*
    function trocarEstado(){
        setTitulo("TROCOU O TITULO")
    }
    */

    function trocarEstado() {
        setTitulo(!titulo)
    }

    function handleOpenModal() {
        setModalIsVisible(true)
    }

    function handleFechaModal() {
        setModalIsVisible(false)
    }
    //diferença entre variavel comun Vs Estado (State)

    return(
        <>
        <div className="formularioLogin">
            <h1>{titulo ? "TROCOU O TITULO" : "Faça aqui o seu login"}</h1>
            <button onClick={trocarEstado} className="bg-green-500">Trocar titulo</button>
            <button className="bg-purple-400" onClick={handleOpenModal}>Abrir modal</button>
            <label htmlFor="user">Usuário</label>
            <input type="text" name="user" id="user" />

            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Fazer Login</button>
        </div>

        {modalIsVisible && (
            <div className="bg-blue-200 w-20 h-20 mt-10">
            <h2>MEU MODAL</h2>
            <button onClick={handleFechaModal} className="bg-blue-500">Fechar</button>
        </div>
        )}
        </>
    )
}