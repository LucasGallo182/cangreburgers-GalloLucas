import ItemDetail from '../components/ItemDetail'
import { useState, useEffect } from 'react'
import '../style.css'
import { useParams } from 'react-router-dom'
import productos from '../mock/array'

export const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        getData.then(res => setDatos(res.find(prod => prod.id === parseInt(itemId))))
    }, [itemId])

    return (
        <div className='bgDetalle'>
            <ItemDetail datos={datos} />
        </div>
    )
}

export default ItemDetailContainer