import '../style.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    const { title, image, subtitle, id } = producto
    return (
        <div className='cardProducto'>
            <Card className='border-0 border-dark cardCSS'>
            <Card.Img className='bgColor border-0' variant='top' src={image} alt='producto' />
            <Card.Body className='bgColor border-0 d-flex justify-content-center align-items-center flex-column'>
                <Card.Title className='titleProducto'>{title}</Card.Title>
                <Card.Text className='subTitleProducto'>{subtitle}</Card.Text>
                <Link to={`/item/${id}`}>
                    <Button variant='warning'>Ver más</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item;