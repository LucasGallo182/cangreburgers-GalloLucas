import { useCartContext } from '../context/CartContext';
import '../style.css'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

function Cart() {
    const { cart, totalPay } = useCartContext()

    if (cart.length === 0) {
        return (
            <>
            <div className='bgCart'>
                <p>No hay ningun producto agregado el carrito</p>
                <Link to='../'>
                    <Button className='btnVolverIncio' variant="warning">Ir a comprar</Button>
                </Link>
                <img src='https://i.ibb.co/y6tYyZ0/giphy.gif' alt="cart empty" />
            </div>
            </>
        )
    }

    return (
        <div className='bgCartTable'>
            <Container>
                <Table striped bordered hover responsive variant="warning">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Titulo</th>
                            <th>Cantidad</th>
                            <th>Precio u.</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(productos => <ItemCart key={productos.id} productos={productos} />)}
                    </tbody>
                </Table>
                <div className='totalPay'>
                    <span>Total: ${totalPay()}</span>
                </div>
            </Container>
        </div>
    )
}

export default Cart;