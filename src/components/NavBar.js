import '../css/NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logocb from '../logocb.png';
import CartWidget from './CartWidget';

function NavBar() {
    const ItemsMenu = [
        {name:'Armá tu combo', link:'/'},
        {name:'Menú', link:'/'},
        {name:'Cupones', link:'/'},
        {name:'Sucursales', link:'/'},
    ]
    return (
        <Navbar className='navBarStyle'>
            <Container>
                <Navbar.Brand className='d-flex align-items-center' href="#home">
                    <img alt="logo" src={logocb} width="60" height="60" />
                    <span className='spanBranding'>CangreBurgers</span>
                    <ul>
                        {ItemsMenu.map(item => {
                            return (
                                <li>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </Navbar.Brand>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;