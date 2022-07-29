import Item from './Item'

const ItemList = ( { datos = []} ) => {
    return (
        datos.map(producto => <Item key={producto.id} producto={producto} />)
    )
}

export default ItemList;