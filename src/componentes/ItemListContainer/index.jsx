import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const ItemListContainer = (propiedades) => {
    return ( 
        <div className='producto'>
            <h3>{propiedades.nombre}</h3>
            <p>{propiedades.desc}</p>
            <p>Madera: {propiedades.madera}</p>
            <p className="precioProducto">Precio:$ {propiedades.precio}</p>
        </div>

    )
}

export default ItemListContainer