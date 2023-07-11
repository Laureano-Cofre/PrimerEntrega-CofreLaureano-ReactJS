import './index.css';
import CartWidget from '../CartWidget';
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavBar = () => {
  return (
    <nav>
        <h3>Creedence's Drum House</h3>
      <ul>
        <li><a href="/inicio">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/nosotros">Quiénes somos?</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  );
}

/* (2) 
function ItemListContainer() {
 // Incluye aquí el rendering de algún texto o título provisional que luego reemplazaremos por nuestro catálogo
} */



export default NavBar