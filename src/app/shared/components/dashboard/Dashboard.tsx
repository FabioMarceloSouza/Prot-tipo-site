import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { BiDotsVerticalRounded, BiShareAlt } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';

const card = [1,2,3,4]

export const Dashboard = () => {
    return (
        <Col md={9} className="color">
            <Row>
                <Col md={12} className='baner-dashoard'>
                    <h4>Indicou → ganhou!</h4>
                    <p>Convide seus amigos <br /> e ganhe 60 EUR</p>
                    <Button>Convidar</Button>
                </Col>
                <Col md={12} className="alert-dashboard">
                    <p>Ops! A sua prova de fundos precisa de atenção</p>
                    <Link to="/">ver mais</Link>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4 className='b'>Em andamento</h4>
                    <p>Veja todas suas transferências em andamento</p>
                    <div className='card-processing shadowI'>
                        <div className='card-processing-title'>
                            Aguardando sua transferência
                        </div>
                        <div className='card-processing-1 '>
                            <div>
                                <p>21/10/2020 ás 20:35h</p>
                                <p><b>Transferência Nº 354651</b></p>
                            </div>
                            <div className='d-flex align-items-start'>
                                <GoPrimitiveDot className='icon-dot-processing' />
                                <p><b>Em andamento</b></p>
                                <BiDotsVerticalRounded className='icon-vertical-dot' />
                            </div>
                        </div>
                        <div className='card-processing-2'>
                            <div >
                                <p>Destino:</p>
                                <p><b>Marrocos</b></p>
                            </div>
                            <div>
                                <p>Para:</p>
                                <p><b>Yourself Naim</b></p>
                            </div>
                            <div>
                                <p>Você enviou:</p>
                                <p className='p-blue'><b>250,00 EUR</b></p>
                            </div>
                        </div>
                        <div className='card-processing-3'>
                            <div className="processing-pin">
                                <p>PIN: 12335456</p>
                            </div>
                            <div className='d-flex align-items-start'>
                                <button className='btn-processing-details'>Ver detalhes</button>
                                <button className='btn-processing-again' >Repetir envio</button>
                            </div>
                        </div>
                    </div>
                    <h4 className='b'>Finalizadas</h4>
                    <p>Veja todas suas transferência finalizadas</p>
                     { card.map( i => {
                         return (
                            <div className='card-finished shadowI'>
                            <div className='card-processing-1  p-2'>
                                <div>
                                    <p>21/10/2020 ás 20:35h</p>
                                    <p><b>Transferência Nº 354651</b></p>
                                </div>
                                <div className='d-flex align-items-start'>
                                    <GoPrimitiveDot className='icon-dot-success' />
                                    <p><b>Finalizado</b></p>
                                    <BiDotsVerticalRounded className='icon-vertical-dot' />
                                </div>
                            </div>
                            <div className='card-processing-2 p-2'>
                                <div >
                                    <p><b>Envio para Maicon Oliveira</b></p>
                                </div>
    
                                <div className='d-flex'>
                                    <p className='margin-r-1'>De:</p>
                                    <p className='p-blue margin-l-1'><b>250,00 EUR</b></p>
                                </div>
                            </div>
                            <div className='card-processing-3 p-2'>
                                <div className="processing-pin">
                                    <p>PIN: 12335456</p>
                                </div>
                                <div className='d-flex align-items-start'>
                                    <button className='btn-processing-details'>Ver detalhes</button>
                                    <button className='btn-processing-again' >Repetir envio</button>
                                </div>
                            </div>
                        </div>
                         )
                     }) }
                </Col>
                <Col md={6} className="p-0">
                    <h4 className='b'>Acompanhe o câmbio</h4>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div className="card-exchange shadowI">

                    </div>
                    <h4 className='b'>Beneficiários Recorrentes</h4>
                    <p>Adicione, visualize e edite beneficiários.</p>
                    
                    <div className="beneficiaries-dashboard shadowI">
                         <div className="card-beneficiaries-dashboard">
                             <p>Yourself Naim</p>
                             <button className='btn-processing-again'>ENVIAR</button>
                         </div>
                         <div className="card-beneficiaries-dashboard">
                             <p>Yourself Naim</p>
                             <button className='btn-processing-again'>ENVIAR</button>
                         </div>
                         <div className="card-beneficiaries-dashboard">
                             <p>Yourself Naim</p>
                             <button className='btn-processing-again'>ENVIAR</button>
                         </div>
                         <div className="card-beneficiaries-dashboard">
                             <p>Yourself Naim</p>
                             <button className='btn-processing-again'>ENVIAR</button>
                         </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}