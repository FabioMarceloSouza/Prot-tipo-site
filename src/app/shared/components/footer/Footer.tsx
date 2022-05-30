import './footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { ImWhatsapp, ImFacebook } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import ImgTelphone from '../../../assets/img/tellphone.svg';
import ImgAcpr from '../../../assets/img/acpr.png';
import ImgCssf from '../../../assets/img/cssf.png';
import ImgNationalBank from '../../../assets/img/national-bank.svg';

export const Footer = () => {
    return (
        <Container fluid className='bg-white p-60 container-footer'>
            <Container>
                <Row className='mb-5'>
                    <Col md={12} className='d-flex justify-content-between mb-5'>
                        <img src="assets/img/BT.svg" alt="" />
                        <div >
                            <ImWhatsapp className='icone-footer' />
                            <ImFacebook className='icone-footer' />
                            <GrInstagram className='icone-footer' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="card-content-footer">
                        <div  className="d-flex mb-3 ">
                        <img src={ImgTelphone} alt="" className='margin-r-2 img-tellphone' />
                        <p><b>Nossos agentes ao seu serviço de segunda a sexta-feira <br />
                            das 9h00 às 20h00 às 09.70.17.10.86 (preço de uma chamada local)</b></p>
                        </div>
                        <p className='f-size-1'>A BT//, uma empresa de serviços financeiros e pagamentos, com sede na Avenue Jean </p>
                        <p className='f-size-1'>Volders 58, 1060 Bélgica, é uma marca comercial utilizada pela Belmoney Transfert SPRL </p>
                        <p className='f-size-1'>devidamente registrada e autorizada pelo Banco Central da Bélgica (NBB - RN 829.975.253) de acordo com a Diretiva PSD2 da União Europeia.</p>    
                    </Col>
                    <Col sm={12} md={6}>
                       <Row className='d-flex link-footer'>
                            <Col xs={6} sm={6}   className='text-end'>
                                <p>Início</p>
                                <p>Conheça a solução</p>
                                <p>Sobre nós</p>
                                <p>Central de Ajuda</p>
                                <p>FXaaS</p>
                            </Col>
                            <Col xs={6} sm={6}   className='text-end'>
                                <p>Blog</p>
                                <p>Trabalhe conosco</p>
                                <p>Cotação Dólar</p>
                                <p>Cotação Euro</p>
                            </Col>
                       </Row>
                    </Col>
                </Row>
                <Row className='border-top border-bottom mb-5'>
                    <Col className='d-flex justify-content-center p-5 card-img-session-3-footer'>
                       <div className='margin-r-5 card-footer-img-1'>
                          <p> Regulamentado por:</p>
                           <img src={ImgNationalBank} alt="national bank" className='img-footer'/>
                       </div>
                       <div>
                           <p>Autorizado por:</p>
                           <div className='d-flex'>
                           <img src={ImgAcpr} alt="national bank" className='img-footer margin-r-3' />
                           <img src={ImgCssf} alt="national bank" className='img-footer' />
                           </div>
                       </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-between last-session-footer'>
                        <p>Copyright © 2022, BT SERVICE SPRL. Todos os direitos reservados.</p>
                        <div className='d-flex'>
                            <a href="#"  className='margin-r-2 a'>Politica de Privacidade</a>
                            <a href="#" className='a'>Termos e Condições</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}