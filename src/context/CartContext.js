import React, { useState, useContext } from 'react'
import { createContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    /* Vaciar Carrito */
    const clear = () => setCart([])

    /* Verificar si esta en el carrito */
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false

    /* Borrar producto del carrito */
    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id))

    /* Agregar producto al carrito */
    const addItem = (item, quantity) => {
        let newCart
        let producto = cart.find(prod => prod.id === item.id)
        if (producto) {
            producto.quantity += quantity
            newCart = [...cart]
        } else {
            producto = {...item, quantity: quantity}
            newCart = [...cart, producto]
        }
        setCart(newCart)
    }

    console.log('carrito', cart)

  return (
    <CartContext.Provider value={{
        clear, isInCart, removeItem, addItem
    }}>
        {children} {/* Llamo a todos los hijos que envie */}
    </CartContext.Provider>
  )
}

export default CartProvider