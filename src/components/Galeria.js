import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

const Galeria = ({ producto }) => {
    const { image, title } = producto

    /* Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='cardGalery'>
            <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={image} />
                    <img src='https://i.ibb.co/995856c/zoom.png' alt='zoom' className='zoomImg' onClick={handleShow} />
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className='bgTransparent border-0' closeButton>
                </Modal.Header>
                <Modal.Body className='align-items-center justify-content-center bgTransparent'>
                    <img src={image} alt={title} className='imgModal' />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Galeria