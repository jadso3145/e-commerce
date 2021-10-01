import {useContext} from "react";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/DataProvider";

const ProductItem = ({title, price, image, category, id}) => {

    const value = useContext(DataContext)

    const {addCarrito} = value;

    // const {carrito, setCarrito} = value.carrito

    return (
        <div className="producto">
            <Link to={`/detalles/${id}`}>
                <div className="producto_img">
                    <img src={image} alt={title}/>
                </div>
            </Link>
            <div className="producto_footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="botton">
                <button className="btn" onClick={() => addCarrito(id)}>
                    Añadir
                </button>
                <div>
                    <Link to={`/detalles/${id}`} className="btn">Vista</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
