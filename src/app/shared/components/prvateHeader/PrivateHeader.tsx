import './privateHeader.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import ImgBT from '../../../assets/img/BT.svg';


export const PrivateHader = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-header">
            <Container >
                <Navbar.Brand  ><Link to="/" ><img src={ImgBT} alt="Logo BTO" /></Link></Navbar.Brand>
                 <div className='card-private-header'>
                 <IoMdNotificationsOutline className='icons-private-header' />
                    <CgProfile className='icons-private-header'/>
                    <p>Fábio Marcelo</p>
                    <IoIosArrowDown className='icons-private-header'/>
                 </div>
            </Container>
        </Navbar>
    )
}