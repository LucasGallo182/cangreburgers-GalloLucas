import '../style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className='navBarStyle'>
                <Container>
                    <Navbar.Brand href="../" className='d-flex align-items-center'>
                        <img alt="logo" src='https://i.ibb.co/y8GTw7S/logocb.png' width="60" height="60" />
                        <span className='spanBranding'>CangreBurgers</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto pt-2">
                            <NavDropdown title={<span className='linkMenu text-danger'>Categorías</span>} id="basic-nav-dropdown" className='catLink'>
                                <NavLink className='linkDrop text-danger' to='/categorias/hamburguesas' key='hamburguesas'>Hamburguesas</NavLink>
                                <NavLink className='linkDrop text-danger' to='/categorias/pollo' key='pollo'>Pollo</NavLink>
                                <NavLink className='linkDrop text-danger' to='/categorias/guarnicion' key='guarnicion'>Guarniciones</NavLink>
                            </NavDropdown>
                            <NavLink className='linkMenu text-danger' to='/sucursales' key='Sucursales'>Sucursales</NavLink>
                            <NavLink className='linkMenu text-danger' to='/sobrenosotros' key='SobreNosotros'>Sobre Nosotros</NavLink>
                            <NavLink className='linkMenu text-danger' to='/contacto' key='Contacto'>Contacto</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;