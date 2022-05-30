import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Select from 'react-select'
import './header.css';


const linguages = [
    {
        label: <div className='card-flags'><p>PT</p> <img src="assets/img/Brasil.svg" alt=""  width="20" height="20" /></div>,
        value: "ptBR"
    },
    {
        label: <div className='card-flags'><p>ES</p> <img src="assets/img/Espanha.svg" alt=""  width="20" height="20" /></div>,
        value: "es"
    },
    {
        label: <div className='card-flags'><p>FR</p> <img src="assets/img/França.svg" alt=""  width="20" height="20" /></div>,
        value: "fr"
    },
    {
        label: <div className='card-flags'><p>EN</p> <img src="assets/img/USA.svg" alt=""  width="20" height="20" /></div>,
        value: "en"
    }
];

//onClick={ e => i18n.changeLanguage(e.target.value)}

export const Header = () => {

    const navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header">
            <Container  >
                <Navbar.Brand  ><Link to="/" ><img src="assets/img/BT.svg" alt="Logo BTO" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-header">
                    <Nav className="nav-responsive">

                        <Link to="/private" className='link'>Blog</Link>
                        <Link to="/private" className='link'>Rastrear Envio</Link>
                        <Link to="/help" className='link'>Ajuda</Link>
                        <Select className='select-lg' name="linguage" options={linguages}  value={linguages[0]}  />
                        <Button variant="outline-primary" className="btn btn-login " onClick={() => navigate('/login')} >ENTRAR</Button>
                        <Button variant="outline-primary" className="btn btn-singin pl-20" onClick={() => navigate('/register')}>CADASTRAR</Button>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}