import ItemDetail from '../components/ItemDetail'
import { useState, useEffect } from 'react'
import '../style.css'
import { useParams } from 'react-router-dom'
import productos from '../mock/array'
import Spinner from 'react-bootstrap/Spinner'

export const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setLoading(true)
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        .finally(() => setLoading(false))
        getData.then(res => setDatos(res.find(prod => prod.id === parseInt(itemId))))
    }, [itemId])

    return (
        <div className='bgDetalle'>
            { loading ? <Spinner animation="border" variant="danger" /> : <ItemDetail datos={datos} /> }
        </div>
    )
}

export default ItemDetailContainer