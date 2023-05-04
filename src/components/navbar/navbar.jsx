import Cart from '../cart/cart'
import ItemMenu from './itemMenu'
import './navbar.css'

function Navbar(props){
    return (
        <nav className="navbar-container">
                <div className='navbar-container-content'>
                    <a href='#'><img className='navbar-logo' src="./src/assets/logo.png" alt="imglogo"/></a>
                    <div>
                        <ul>
                            <ItemMenu>Inicio</ItemMenu>
                            <ItemMenu>Bases</ItemMenu>
                            <ItemMenu>Combos</ItemMenu>
                            <ItemMenu>Bases personalizadas</ItemMenu>
                            <Cart></Cart>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar