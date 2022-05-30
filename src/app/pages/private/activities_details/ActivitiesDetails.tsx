import './activitiesDetails.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../../shared/components/footer/Footer';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { SideMenu } from '../../../shared/components/sidemenu/SideMenu';
import { useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { BiDotsVerticalRounded, BiShareAlt } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiDownload } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa'
import { Detail } from './detail/Detail';
import { useNavigate } from 'react-router-dom';
import ImgMorrocos  from '../../../assets/img/marrocos.svg';
import ImgBelgium  from '../../../assets/img/belgica.svg';

export const ActivitiesDetails = () => {
    const [change, setChange] = useState('detail');
    const [receipt, setReceipt] = useState(false);
    const navigate = useNavigate()


    return (
        <>
            <PrivateHader />
            <Container className='p-60 container-activities'>
                <Row className='justify-content-between'>
                    <SideMenu />
                    <Col md={9} className="p-l-0 d-flex">

                        <div className="content-extract">

                            <div className="card-extract-admin" id="card-1" >
                                <div className="number-date">
                                    <div className='d-flex align-items-center'>
                                        <p >Transferencia N° 123456789 -</p>
                                        <p className='activities-date'>21/10/2020 ás 20:35h</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <GoPrimitiveDot color='#E0A605' />  <p className='progress-activities' >Em processo</p>
                                        <BiDotsVerticalRounded className='dot-activity' onClick={() => setReceipt(!receipt)} />
                                    </div>
                                    {(receipt != false) ?
                                        <div className='download shadow'>
                                            <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 5 }} ><FiDownload color='var(--btn-one)' /> <span>Download</span></div>
                                            <div><BiShareAlt color='var(--btn-one)' /> <span>Compartilhar</span></div>
                                        </div> : <></>
                                    }
                                </div>
                                <div className="extract-data">
                                    <div className='d-flex'>
                                        <div className="content-extract-data ">Destino: <p > <img src={ImgMorrocos} alt="" /> <b>Marrocos</b> </p></div>
                                        <div className=' content-extract-data-2' >Para:<p className='mt-1'> <b>Youssef Naim</b> </p></div>
                                    </div>
                                    <div>Você enviou:<p style={{ fontWeight: 'bold', color: 'var(--btn-one)' }}>250,00 EUR</p></div>
                                </div>


                                <div className="card-expand mb-3">
                                    <div className="expand-float row d-flex flex-column">
                                        <div className="col-12 col-md-12 d-flex justify-content-between mb-5">
                                            <button className={`btn-change shadowI ${(change == 'status') ? 'btn-active' : ''} `} onClick={e => setChange('status')}>Status do envio</button>
                                            <button className={`btn-change shadowI ${(change == 'detail') ? 'btn-active' : ''} `} onClick={e => setChange('detail')} >Detalhes</button>
                                        </div>
                                        <Detail name={change} />
                                    </div>
                                    <div className='row submit-again-extract mt-5'>
                                        <div className="col-md-4">
                                            <span>Você envia</span>
                                            <div className="card-input-again-activities" >
                                                <input type="text" value={`250,00`} className='input input-activity' disabled />
                                                <div className='d-flex align-items-center'>
                                                    <img src={ImgBelgium} alt="flag from Morrocos" />
                                                    <p><b>EUR</b></p>
                                                    <RiArrowDownSLine className='icon-down-again'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <span>Beneficiario recbe</span>
                                            <div className="card-input-again-activities" >
                                                <input type="text" value={`2634,00`} className='input input-activity' disabled />
                                                <div className='d-flex align-items-center'>
                                                    <img src={ImgMorrocos} alt="flag from Morrocos" />
                                                    <p><b>MAD</b></p>
                                                    <RiArrowDownSLine className='icon-down-again'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-end justify-content-end">
                                            <button className='btn btn-primary btn-activity' >REPETIR ENVIO</button>
                                        </div>
                                    </div>
                                    <div>
                                    </div>


                                </div>

                            </div>
                            <Button className='btn-back' onClick={() => navigate('/activities')}>VOLTAR</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

