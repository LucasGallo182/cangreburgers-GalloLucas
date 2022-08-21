import React, { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import GaleriaList from '../components/GaleriaList'

const GaleriaContainer = () => {
    const [itemImg, setItemImg] = useState()

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
            .then(res => setItemImg(res.docs.map(item => ({...item.data()}))))
    }, [])

    return (
        <div className='galery'>
            <div className='galeriaH1'>
                <h1 className='parrafoEjemplo'>Ya conoces nuestros productos?</h1>
            </div>
            <div className='galeriaDiv'>
                <GaleriaList itemImg={itemImg} />
            </div>
        </div>
    )
}

export default GaleriaContainer