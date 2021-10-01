import inicioP from '../../images/inicio.jpg'
import {Link} from "react-router-dom";
import './inicio.css'

const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1>Inicio</h1>
            </Link>
            <Link to="/productos">
                <h1>Productos</h1>
            </Link>
            <img src={inicioP} alt="INICIO"/>
        </div>
    )
}

export default Inicio
