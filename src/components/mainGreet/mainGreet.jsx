import MainItem from "./mainItem";
import './mainGreet.css'

function MainGreet(props){
    return(
        <main className="main">
            <h1 className="main-title">
                Bienvenido a Inspira Espacios
            </h1>
            <div className="main-container">
                <MainItem img='./src/assets/base_cuadrada.jpg'>Bases cuadradas</MainItem>
                <MainItem img='./src/assets/base_tres_patas.jpg'>Bases de tres patas</MainItem>
                <MainItem img='./src/assets/base_triangular.jpg'>Bases traingulares</MainItem>
            </div> 
        </main>
    )
}

export default MainGreet