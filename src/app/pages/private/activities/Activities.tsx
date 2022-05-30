import './activities.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../../shared/components/footer/Footer';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { SideMenu } from '../../../shared/components/sidemenu/SideMenu';
import { useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { MdKeyboardArrowUp, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { BiDotsVerticalRounded, BiShareAlt } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiDownload } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import ImgMorrocos  from '../../../assets/img/marrocos.svg';

const remittance = [1,2,3,4,5,6]

export const Activities = () => {
     const navigate = useNavigate()

    return (
        <>
            <PrivateHader />
            <Container className='p-60 container-activities color'>
                <Row className='justify-content-between'>
                    <SideMenu />
                    <Col md={9} className="p-l-0 d-flex">
                        <div className="content-activities">
                            <div className="header-activities">
                                <div>
                                    <h4>Atividades</h4>
                                    <p>Visualize todas as suas atividades</p>
                                </div>
                                <Button className='header-btn-activities'>CADASTRAR NOVO BENEFICIÁRIO</Button>
                            </div>
                            <div className="card-content-activities shadowI">
                                <div className="card-input-activities">
                                    <input type="text" className='input' />
                                    <FaSearch className='icon-search-gray' />
                                </div>
                                 { remittance.map((i, index) => (
                                      <div className="card-remittance-activities" key={index}>
                                      <div className="header-card-remittance-activities">
                                          <div className='card-harder-remittance-activities-1'>
                                              <img src={ImgMorrocos} alt="flag from morroco" />
                                              <div>
                                                  <p className='remittance-date'>21/10/2020 ás 20:35h</p>
                                                  <p><b>Envio para Maicon Oliveira</b></p>
                                              </div>
                                          </div>
                                          <div className='card-harder-remittance-activities-2'>
                                              <div className='d-flex align-items-center justify-content-end'>
                                                  <GoPrimitiveDot className='icon-remittance-dot' />
                                                  <p className='text-status b'>Finalizado</p>
                                              </div>
                                              <div className='d-flex align-items-center justify-content-end'>
                                                  <p className='text-status'>de: </p>
                                                  <p className='value-remittance-activities'><b>250,00 EUR</b></p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="footer-card-remittance-activities">
                                             <div className='pin-remittance-activities'>
                                                 <p>PIN: 12335456</p>
                                             </div>
                                             <div className="btn-card-activities-remittance">
                                                 <Button className='btn-remittance-details-activities' onClick={() => navigate('/private/activities/details')}>Ver detalhes</Button>
                                                 <Button className='btn-remittance-again-activities'>Repetir envio</Button>
                                             </div>
                                      </div>
                                  </div>
                                 )) }

                                 <div className="pagination-activies-remittance">
                                     <MdKeyboardArrowLeft className='icon-card-pagination-activities' />
                                     <div className="card-pagintaion-activities shadowI card-pagintaion-activities-activite">
                                         <p>1</p>
                                     </div>
                                     <div className="card-pagintaion-activities shadowI">
                                         <p>2</p>
                                     </div>
                                     <div className="card-pagintaion-activities shadowI">
                                         <p>3</p>
                                     </div>
                                     <div className="card-pagintaion-activities shadowI">
                                         <p>...</p>
                                     </div>
                                     <div className="card-pagintaion-activities shadowI">
                                         <p>10</p>
                                     </div>
                                     <MdKeyboardArrowRight className='icon-card-pagination-activities' />
                                 </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}