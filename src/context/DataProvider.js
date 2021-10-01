import {createContext, useEffect, useState} from "react";
import data from '../Data'

export const DataContext = createContext()

export const DataProvider = (props) => {

    const [productos,
        setProductos] = useState([])

    const [menu,
        setMenu] = useState(false)

    const [carrito,
        setCarrito] = useState([])

    const [total,
        setTotal] = useState(0)

    useEffect(() => {
        const producto = data.items;
        if (producto) {
            setProductos(producto)
        } else {
            setProductos([])
        }
    }, [])

    useEffect(() => {
        const addToCarrito = JSON.parse(localStorage.getItem('addToCarrito'))
        if (addToCarrito) {
            setCarrito(addToCarrito)
        }

    }, [])

    useEffect(() => {

        localStorage.setItem('addToCarrito', JSON.stringify(carrito))

    }, [carrito])

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })

        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([
                ...carrito,
                ...data
            ])
        } else {
            alert("El producto ya esta añadido al carrito")
        }
    }

    const value = {
        productos: [productos],
        Menu: {
            menu,
            setMenu
        },
        addCarrito: addCarrito,
        carrito: {
            carrito,
            setCarrito
        },
        total: {
            total,
            setTotal
        }
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )

}