import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Contacto = () => {
    const [contactId, setContactId] = useState('')
    const [ capturaDataContact, setCapturaDataContact ] = useState({
        email: '',
        name: '',
        phone: '',
        comments: ''
    })
    const navigate = useNavigate()

    const contact = {...capturaDataContact}

    const sendForm = () => {
        const db = getFirestore()
        const dataCollection = collection(db, 'contact')
        addDoc(dataCollection, contact)
            .then(({ id }) => setContactId(id))
        setTimeout(() => {
            navigate('../')
        }, 6000)
    }

    const handleInputChange = (event) => {
        setCapturaDataContact({
            ...capturaDataContact,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div className='contactForm d-flex align-items-center'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6} className='colContacto'>
                        <h3 className='text-center pb-3'>Por favor rellena el formulario y nos pondremos en contacto a la brevedad</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='email' onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name='name' onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="number" name='phone' onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comentarios</Form.Label>
                                <Form.Control as="textarea" name='comments' rows={3} onChange={handleInputChange} />
                            </Form.Group>
                            {
                            contactId === ''
                                ? ''
                                : <Alert variant="success">
                                    <p className='mb-0'>Nro. de contacto: <strong>{contactId}</strong></p>
                                </Alert>
                            }
                            {
                            !(capturaDataContact.name !== '' && capturaDataContact.email !== '' && capturaDataContact.phone !== '' && capturaDataContact.comments !== '') ?
                            '' :
                            <Button variant="warning" onClick={sendForm}>Enviar</Button>
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacto