import '../style.css'
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext';

function CartWidget() {
    const { totalItems } = useCartContext()
    return (
        <>
            <div className='cartIcon'>
                <Link to='cart'>
                    <img src='https://i.ibb.co/MDksF29/carts.png' alt="carrito" />
                </Link>
                <span className='valueCart'>{totalItems() || ''}</span>
            </div>
        </>
    )
}

export default CartWidget;