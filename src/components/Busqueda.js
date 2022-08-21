import { getFirestore, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Table } from 'react-bootstrap'

const Busqueda = () => {
    const [viewOrder, setViewOrder] = useState()
    const [search, setSearch] = useState('')

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'orders')
        getDocs(queryCollection)
            .then(res => setViewOrder(res.docs.map(item => ({id: item.id, ...item.data()}))))
    }, [])

    const handleChange = (event) => {
        setSearch(event.target.value)
        handleFilter(event.target.value)
    }

    const handleFilter = (searchId) => {
        const resultadosBusqueda = viewOrder.filter((e) => {
            if (e.id.toString().toLowerCase().includes(searchId.toLowerCase())) {
                return (e)
            } else {
                return('')
            }
        })
        setViewOrder(resultadosBusqueda)
    }

    return (
        <div className='divSearch'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8} className='colSearch'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el ID a buscar..."
                                    value={search}
                                    onChange={handleChange}
                                    name='search' />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className='justify-content-center pt-5'>
                    <Col md={8}>
                        <Table striped bordered hover>
                            <thead className='theadSearch'>
                                <tr className='text-center'>
                                    <th>ID</th>
                                    <th>Productos</th>
                                    <th>Cantidad</th>
                                    <th>Precio u.</th>
                                    <th>Total</th>
                                    <th>Pedido por</th>
                                </tr>
                            </thead>
                            { search ?
                            <tbody>
                                {   viewOrder &&
                                    viewOrder.map((orden) => {
                                        return(
                                        <tr key={orden.id}>
                                            <td className='text-center'>{orden.id}</td>
                                            <td className='text-center'>{orden.items.map((item) => {
                                                return (
                                                    <ul key={Math.random()} className='listSearch'>
                                                        <li>{item.title}</li>
                                                    </ul>
                                                )
                                            })}</td>
                                            <td className='align-items-center'>{orden.items.map((item) => {
                                                return (
                                                    <ul key={Math.random()} className='listSearch'>
                                                        <li>{item.quantity}</li>
                                                    </ul>
                                                )
                                            })}</td>
                                            <td className='align-items-center'>{orden.items.map((item) => {
                                                return (
                                                    <ul key={Math.random()} className='listSearch'>
                                                        <li>${item.price}</li>
                                                    </ul>
                                                )
                                            })}</td>
                                            <td className='text-center'>${orden.total}</td>
                                            <td className='text-center'>{orden.buyer.name}</td>
                                        </tr>
                                    )}
                                )}
                            </tbody>
                            : ''}
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Busqueda