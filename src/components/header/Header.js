import Logo from '../../images/Nike.jpg'
import {FaShoppingCart} from 'react-icons/fa'
import './header.css'
import {Link} from "react-router-dom";
import {useContext} from 'react';
import {DataContext} from '../../context/DataProvider';

const Header = () => {

    const value = useContext(DataContext)

    const {menu, setMenu} = value.Menu

    const {carrito} = value.carrito

    const toggleMenu = () => {
        setMenu(!menu)
    }


    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toggleMenu}>
                <FaShoppingCart className="cartIcon"/>
                <span className="item-total">{carrito.length}</span>
            </div>
        </header>
    )
}

export default Header
