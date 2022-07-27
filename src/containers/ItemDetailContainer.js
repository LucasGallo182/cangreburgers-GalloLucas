import ItemDetail from '../components/ItemDetail'
import { useState, useEffect } from 'react'

const producto = { id: 1, titulo: 'Doble Napolitana XL', imagen: 'https://i.ibb.co/GsDN2RV/Doble-Napolitano-XL-1.png', precio: 3000, descripcion: 'La combinación de siempre, ahora duplicada: 2 carnes a la parrilla + jamón y queso + tomate + mayonesa.' }

export const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(producto)
            }, 2000)
        })

        getData.then(res => setData(res))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer