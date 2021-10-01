import {useContext, useEffect, useState} from "react"
import {useParams} from "react-router"
import {DataContext} from "../../context/DataProvider"
import './detalles.css'
import ProductItem from "./ProductItem"

const ProductsDetails = () => {

    const value = useContext(DataContext)

    const [getDetails,
        setGetDetails] = useState([])

        const addCarrito = value.addCarrito

    const [url,
        setUrl] = useState(0)

        const [imagenes, setImagenes] = useState('')

    const [productos] = value.productos

    const params = useParams()

    let productoR = 0

    useEffect(() => {
        productos.forEach(producto => {
            productoR = 0;
            if (producto.id === parseInt(params.id)) {
                setGetDetails(producto)
                setUrl(0)
            }
        });
    }, [params.id, productos])

    const hanldeImput =(e) => {
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
    }

    useEffect(() => {
        const values = `${getDetails.img1}${url}${getDetails.img2}`
        setImagenes(values)
    }, [params.id, url])


    if (getDetails.length < 1) {
        return null
    }

    return (
        <div>
            { <div className="detalles">
                <h1>{getDetails.title}</h1>
                <p className="price">${getDetails.price}</p>
                <div className="grid">
                    <p className="nuevo">nuevo</p>
                    <div className="size">
                        <select placeholder="Tamaño">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <p>Tamaño</p>
                    </div>
                </div>
                <button onClick={()=> addCarrito(getDetails.id)}>Añadir al carrito</button>
                {url ? <img src={imagenes} alt={getDetails.title}/> : <img src={getDetails.image.default} alt={getDetails.title}/>}
                <input type="range" min="1" max="36" value={url} onChange={hanldeImput}/>
                <div className="description">
                    <p>
                        <b>Descripcion:</b>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like readable English. Many desktop
                        publishing packages and web page editors now use Lorem Ipsum as their default.<br/>
                        <br/>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>}
            <h2 className="relacionados">Productos relacionados</h2>
            <div className="productos">
                {productos.map(item =>  {

                    if ((productoR < 6)&&(getDetails.category === item.category)) {
                        productoR ++;
                        return  < ProductItem key = {
                            item.id
                        }
                        id = {
                            item.id
                        }
                        title = {
                            item.title
                        }
                        price = {
                            item.price
                        }
                        image = {
                            item.image.default
                        }
                        category = {
                            item.category
                        }
                        cantidad = {
                            item.cantidad
                    }/>

                }})

                }

            </div>
        </div>
    )
}

export default ProductsDetails
