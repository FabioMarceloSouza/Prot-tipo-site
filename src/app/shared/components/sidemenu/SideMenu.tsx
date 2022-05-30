import { Col, Button } from 'react-bootstrap';
import './sideMenu.css';
import { dataMenu } from './data';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import ImgBtCard  from '../../../assets/img/btcard.png';

export const SideMenu = () => {
    const navigate = useNavigate();

    return (
        <Col md={3}>
            <div className='container-side-menu'>
                <Button className='btn-side-menu'>ENVIAR DINEHIRO</Button>
                <div className='content-side-menu'>
                    <div className="card-side-menu">
                        {dataMenu.map(i => {
                            return (
                                <div className={`card-menu }`} onClick={ () => navigate(`/${i.navigate}`)} >
                                    <div className="circle-menu" onClick={ () => navigate(`/${i.navigate}`)}> {i.icon} </div>
                                    <p className="text-menu" onClick={ () => navigate(`/${i.navigate}`)}>{i.title}</p>
                                    {i.arrow}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='side-menu-btcard'>
                    <img src={ImgBtCard} alt="imagem do cartão da BT" />
                    <h5>ABRA SUA CONTA <br /> EM 5 MINUTOS* E RECEBA SEU CARTÃO MASTERCARD® BLACK</h5>
                    <div>
                        <p>SOMENTE COM SEU PASSAPORTE *</p>
                    </div>

                    <Link to="/" >SAIBA MAIS  <IoIosArrowForward className='icon-card-arrow' /> </Link>
                </div>
            </div>
        </Col>
    )
}