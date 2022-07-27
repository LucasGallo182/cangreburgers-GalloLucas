import '../style.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const ItemDetail = ({ data }) => {
    return (
        <div className='cardDescription'>
            <Card className='paddingStyle border-0'>
                <Card.Img className='bgBodyCard' variant="top" src={data.imagen} />
                <Card.Body className='bgBodyCard'>
                    <Card.Title><span>{data.titulo}</span></Card.Title>
                    <Card.Text>
                    <p>{data.descripcion}</p>
                    <p className='precioText'>${data.precio}</p>
                    </Card.Text>
                    <Button variant="warning">Comprar</Button>
                </Card.Body>
            </Card>
        </div> 
    )
}

export default ItemDetail