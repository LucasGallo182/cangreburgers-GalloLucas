import '../style.css'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

export const ItemDetail = ({ datos }) => {
    const [goCart, setGoCart] = useState(false)
    const {addItem} = useCartContext()

    const { title, subtitle, description, image, precio, stock } = datos
    const onAdd = (quantity) => {
        setGoCart(true)
        addItem(datos, quantity)
    }

    return (
        <div className='cardDescription'>
            <Card className='paddingStyle border-0'>
                <Card.Img className='bgBodyCard' variant="top" src={image} />
                <Card.Body className='bgBodyCard d-flex align-items-center flex-column'>
                    <Card.Title className='text-center detailTitle'><span>{title}</span></Card.Title>
                    <Card.Text className='detailSubTitle'>{subtitle}</Card.Text>
                    <Card.Text className='detailDescription'>{description}</Card.Text>
                    <Card.Text className='detailPrecio'>${precio}</Card.Text>
                    {
                        goCart
                            ? <Link to='../Cart' className='btnTerminarCompra'>
                                <button className="cssbuttons-io-button"> Terminar compra
                                    <div className="icon">
                                        <svg className="shopping_cart" id="Layer_1" enableBackground="new 0 0 511.728 511.728" viewBox="0 0 511.728 511.728" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentcolor" d="m147.925 379.116c-22.357-1.142-21.936-32.588-.001-33.68 62.135.216 226.021.058 290.132.103 17.535 0 32.537-11.933 36.481-29.017l36.404-157.641c2.085-9.026-.019-18.368-5.771-25.629s-14.363-11.484-23.626-11.484c-25.791 0-244.716-.991-356.849-1.438l-17.775-65.953c-4.267-15.761-18.65-26.768-34.978-26.768h-56.942c-8.284 0-15 6.716-15 15s6.716 15 15 15h56.942c2.811 0 5.286 1.895 6.017 4.592l68.265 253.276c-12.003.436-23.183 5.318-31.661 13.92-8.908 9.04-13.692 21.006-13.471 33.695.442 25.377 21.451 46.023 46.833 46.023h21.872c-3.251 6.824-5.076 14.453-5.076 22.501 0 28.95 23.552 52.502 52.502 52.502s52.502-23.552 52.502-52.502c0-8.049-1.826-15.677-5.077-22.501h94.716c-3.248 6.822-5.073 14.447-5.073 22.493 0 28.95 23.553 52.502 52.502 52.502 28.95 0 52.503-23.553 52.503-52.502 0-8.359-1.974-16.263-5.464-23.285 5.936-1.999 10.216-7.598 10.216-14.207 0-8.284-6.716-15-15-15zm91.799 52.501c0 12.408-10.094 22.502-22.502 22.502s-22.502-10.094-22.502-22.502c0-12.401 10.084-22.491 22.483-22.501h.038c12.399.01 22.483 10.1 22.483 22.501zm167.07 22.494c-12.407 0-22.502-10.095-22.502-22.502 0-12.285 9.898-22.296 22.137-22.493h.731c12.24.197 22.138 10.208 22.138 22.493-.001 12.407-10.096 22.502-22.504 22.502zm74.86-302.233c.089.112.076.165.057.251l-15.339 66.425h-51.942l8.845-67.023 58.149.234c.089.002.142.002.23.113zm-154.645 163.66v-66.984h53.202l-8.84 66.984zm-74.382 0-8.912-66.984h53.294v66.984zm-69.053 0h-.047c-3.656-.001-6.877-2.467-7.828-5.98l-16.442-61.004h54.193l8.912 66.984zm56.149-96.983-9.021-67.799 66.306.267v67.532zm87.286 0v-67.411l66.022.266-8.861 67.145zm-126.588-67.922 9.037 67.921h-58.287l-18.38-68.194zm237.635 164.905h-36.426l8.84-66.984h48.973l-14.137 61.217c-.784 3.396-3.765 5.767-7.25 5.767z" />
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                            : <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail