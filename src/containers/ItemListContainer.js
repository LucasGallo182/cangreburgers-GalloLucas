import '../style.css'
import ItemList from '../components/ItemList'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import productos from '../mock/array'

export const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        if(categoryId){
            getData.then(res => setDatos (res.filter(prod => prod.category === categoryId)))
            setLoading(false)
        } else {
            getData.then(res => setDatos(res))
            setLoading(false)
        }
    }, [categoryId])

    return (
        <div className='divBody1'>
            <p className="parrafoEjemplo">{props.textoSalida}</p>
            <div className='divBody'>
                {loading ? <Spinner animation="border" variant="warning" /> : <ItemList datos={datos} />}
            </div>
        </div>
    )
}

export default ItemListContainer;