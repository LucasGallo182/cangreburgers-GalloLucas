import '../css/NavBar.css';
import cartIcono from '../carts.png';

function CartWidget() {
    return (
        <>
            <div className='cartIcon'>
                <img src={cartIcono} alt="carrito" />
                <span>2</span>
            </div>
        </>
    )
}

export default CartWidget;