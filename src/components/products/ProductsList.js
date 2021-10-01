import {useContext} from 'react';
import {DataContext} from '../../context/DataProvider';
import ProductItem from './ProductItem';
import './productsList.css'

const ProductsList = () => {
    const value = useContext(DataContext)

    const [productos] = value.productos


    return (
        <div>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                {productos.map(item => < ProductItem key = {
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
                } />)}
            </div>
        </div>
    )
}

export default ProductsList
