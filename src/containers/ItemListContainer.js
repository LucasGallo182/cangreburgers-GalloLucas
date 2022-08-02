import '../style.css'
import ItemList from '../components/ItemList'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import productos from '../mock/array'

export const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        const getData = new Promise (resolve => {
            setLoading(true)
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        })
        .finally(() => setLoading(false))
        if(categoryId){
            getData.then(res => setDatos (res.filter(prod => prod.category === categoryId)))
        } else {
            getData.then(res => setDatos(res))
        }
    }, [categoryId])

    return (
        <div className='divBody1'>
            <p className="parrafoEjemplo">{props.textoSalida}</p>
            <div className='divBody'>
                {loading ? <Spinner animation="border" variant="danger" /> : <ItemList datos={datos} />}
            </div>
        </div>
    )
}

export default ItemListContainer;