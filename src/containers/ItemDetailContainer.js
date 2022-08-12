import ItemDetail from '../components/ItemDetail'
import { useState, useEffect } from 'react'
import '../style.css'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [datos, setDatos] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        
        const queryDoc = doc(db, 'items', itemId)
        getDoc(queryDoc)
            .then(res => setDatos({id: res.id, ...res.data()}))
    }, [itemId])

    return (
        <div className='bgDetalle'>
            <ItemDetail datos={datos} />
        </div>
    )
}

export default ItemDetailContainer