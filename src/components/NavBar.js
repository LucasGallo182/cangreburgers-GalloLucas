import '../style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar() {
    const ItemsMenu = [
        { name: 'Armá tu combo', link: '/' },
        { name: 'Menú', link: '/' },
        { name: 'Cupones', link: '/' },
        { name: 'Sucursales', link: '/' },
    ]
    return (
        <>
            <Navbar expand="lg" className='navBarStyle'>
                <Container>
                    <Navbar.Brand href="#home" className='d-flex align-items-center'>
                        <img alt="logo" src='./img/logocb.png' width="60" height="60" />
                        <span className='spanBranding'>CangreBurgers</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto pt-2">
                            {ItemsMenu.map(item => {
                                return (
                                    <Nav.Link className='linkMenu' key={item.name} href={item.link}>{item.name}</Nav.Link>
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;