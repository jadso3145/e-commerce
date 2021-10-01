import {AiOutlineClose} from 'react-icons/ai'
import {IoMdArrowDropupCircle} from 'react-icons/io'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import {IoTrashBin} from 'react-icons/io5'
import './carrito.css'
import {DataContext} from '../../context/DataProvider'
import {useContext} from 'react'

const Carrito = () => {
    const value = useContext(DataContext)

    const {menu, setMenu} = value.Menu

    const {carrito, setCarrito} = value.carrito

    const {total} = value.total

    const toggleCart = () => {
        setMenu(false)
    }

    const resta = (id) => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad <= 1
                    ? item.cantidad = 1
                    : item.cantidad -= 1
            }
            setCarrito([...carrito])
        });
    }

    const suma = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1
            }
            setCarrito([...carrito])
        });
    }

    const removeProduct = (id) => {
        if (window.confirm("¿quieres eliminar el producto del carrito?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            });
            setCarrito([...carrito])
        }
    }

    const show1 = menu
        ? "carritos show"
        : "carritos"

    const show2 = menu
        ? "carrito show"
        : "carrito"

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito-close" onClick={toggleCart}>
                    <AiOutlineClose className="close"/>
                </div>
                <h2>Tu carrito</h2>

                {carrito.length === 0
                    ? <h2>Carrito vacio</h2>
                    : <div>
                        {carrito.map(producto => <div className="carrito-center" key={producto.id}>
                            <div className="carrito-item">
                                <img src={producto.image.default} alt="carrito"/>
                                <div>
                                    <h3>{producto.title}</h3>
                                    <p className="price">${producto.price}</p>
                                </div>
                                <div>
                                    <IoMdArrowDropupCircle className="icono" onClick={() => suma(producto.id)}/>
                                    <p className="cantidad">{producto.cantidad}</p>
                                    <IoMdArrowDropdownCircle className="icono" onClick={() => resta(producto.id)}/>
                                </div>
                                <div className="remove-item" onClick={() => removeProduct(producto.id)}>
                                    <IoTrashBin className="icono"/>
                                </div>
                            </div>
                        </div>)}</div>}

                <div className="carrito-footer">
                    <h3>Total: ${total}</h3>
                    <button className="btn">pagar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito
