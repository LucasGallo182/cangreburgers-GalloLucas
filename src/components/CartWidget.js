import '../style.css'
import { Link } from "react-router-dom"

function CartWidget() {
    return (
        <>
            <div className='cartIcon'>
                <Link to='cart'>
                    <img src='./img/carts.png' alt="carrito" />
                </Link>
                <span className='valueCart'>2</span>
            </div>
        </>
    )
}

export default CartWidget;