import React from 'react'
import Galeria from './Galeria'

const GaleriaList = ({ itemImg = [] }) => {

    return (
        itemImg.map(producto => <Galeria key={producto.title} producto={producto} />)
    )
}

export default GaleriaList