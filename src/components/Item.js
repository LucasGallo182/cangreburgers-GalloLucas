import '../style.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    const { title, image, subtitle, id } = producto
    return (
        <div className='cardProducto'>
            <Card className='border-0 border-dark cardCSS'>
                <Card.Img className='imgAnimation bgColor border-0' variant='top' src={image} alt='producto' />
                <Card.Body className='bgColor border-0 d-flex justify-content-center align-items-center flex-column'>
                    <Card.Title className='titleProducto'>{title}</Card.Title>
                    <Card.Text className='subTitleProducto'>{subtitle}</Card.Text>
                    <Link className='linkButton' to={`/item/${id}`}>
                        <button className="cssbuttons-io-button"> Ver más
                            <div className="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                            </div>
                        </button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;