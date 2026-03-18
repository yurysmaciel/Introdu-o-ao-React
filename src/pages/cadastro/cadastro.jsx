import Button from "../../components/button/button"
import "./cadastro.css"

export default function CadastroPage() {
    return(
        <>
        <form className="container-cadastro">
            <h1>Se cadastre aqui!!!</h1>
            <Button text={"Clique Aqui!"}/>
        </form>
        </>
    )
}