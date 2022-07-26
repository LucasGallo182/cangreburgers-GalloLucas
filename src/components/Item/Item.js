import './Item.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Item = ({burger}) => {
    return (
        <div className='cardProducto'>
            <Card className='border-0 border-dark m-1 cardCSS spin circle'>
            <Card.Img className='bgColor' variant='top' src={burger.imagen} alt='producto' />
            <Card.Body className='bgColor'>
                <Card.Title className='titleProducto'>{burger.titulo}</Card.Title>
                <Button variant='warning'>Comprar</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item;