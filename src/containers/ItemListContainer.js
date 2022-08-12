import '../style.css'
import ItemList from '../components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const ItemListContainer = (props) => {
    const [datos, setDatos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryItems = collection(db, 'items')
        if(categoryId){
            const queryFilter = query(queryItems, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setDatos(res.docs.map(item => ({id: item.id, ...item.data()}))))
        } else {
            getDocs(queryItems)
                .then(res => setDatos(res.docs.map(item => ({id: item.id, ...item.data()}))))
        }
    }, [categoryId])

    return (
        <div className='divBody1'>
            <p className="parrafoEjemplo">{props.textoSalida}</p>
            <div className='divBody'>
                <ItemList datos={datos} />
            </div>
        </div>
    )
}

export default ItemListContainer;