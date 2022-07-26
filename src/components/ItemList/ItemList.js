import Item from '../Item/Item'

const ItemList = ( { datos = []} ) => {
    return (
        datos.map(producto => <Item key={producto.id} burger={producto} />)
    )
}

export default ItemList;