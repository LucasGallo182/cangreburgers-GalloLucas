import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useCartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

const ModalFinalizar = () => {
    const { cart, totalPay, clear } = useCartContext()

    /* Mostrar ID en Modal */
    const [ShowMeId, setShowMeId] = useState('')
    
    /* Imprimir Fecha */
    const fechaHoy = Date.now()
    const date = new Date(fechaHoy).toLocaleDateString()
    
    
    /* Llevar datos de inputs */
    const [buyerData, setBuyerData] = useState({
        name: '',
        email: '',
        phone: '',
        adress: ''
    })

    const handleInputChange = (event) => {
        setBuyerData({
            ...buyerData,
            [event.target.name] : event.target.value
        })
    }

    /* RepE-mail */
    const [repEmail, setRepEmail] = useState('')
    
    /* Navigate */
    const navigate = useNavigate()

    /* Firestore */
    const order = {
        buyer: {...buyerData},
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.precio, quantity: product.quantity })),
        date: date,
        total: totalPay(),
    }

    /* Fn finalizar compra */
    const finalizarClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => setShowMeId(id))

    }

    /* Fn Aceptar Orden */
    const endOrder = () => {
        clear()
        navigate('../')
    }

    /* BS Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Generar orden
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Generar orden de pedido</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        { buyerData.email !== '' && buyerData.email === repEmail ? <Alert variant="success">Los campos e-mail coinciden</Alert> : <Alert variant="danger">Los campos e-mail no coinciden</Alert> }
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name='name'
                                onChange={handleInputChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name='email'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Repite email</Form.Label>
                            <Form.Control
                                type="email"
                                value={repEmail}
                                onChange={(e) => setRepEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="tel"
                                name='phone'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name='adress'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                        {
                            ShowMeId === ''
                                ? !(buyerData.name !== '' && buyerData.email !== '' && buyerData.phone !== '' && buyerData.adress !== '') ?
                                '' :
                                <Button variant='success' onClick={finalizarClick}>Finalizar Compra</Button>
                                : <>
                                <Alert variant="dark">
                                    <Alert variant="success">
                                    <p className='mb-0'>Pedido generado exitosamente, su número de orden es el: <strong>{ShowMeId}</strong></p>
                                    </Alert>
                                    <Alert variant="warning">
                                    <p className='mb-0'>Recuerda guardarlo para poder buscar tu pedido.</p>
                                    </Alert>
                                </Alert>
                                <Button variant='warning' onClick={endOrder}>Volver al Inicio</Button>
                                </>
                        }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalFinalizar