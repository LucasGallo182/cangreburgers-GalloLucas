import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const error = () => {
    return (
        <div className='error404 d-flex align-items-center'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6} className='colError'>
                        <h1>Oops!</h1>
                        <h2>404 No encontrado</h2>
                        <p>La página a la que intentas acceder no existe</p>
                        <Link to='/'>
                            <Button variant='warning'>Volver al Inicio</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default error