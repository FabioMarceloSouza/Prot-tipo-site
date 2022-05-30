import './beneficiariesTransfer.css';
import { Footer } from '../../../shared/components/footer/Footer';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { Step } from '../../../shared/components/step/Step';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import ImgMorrocos from '../../../assets/img/marrocos.svg';
import { useNavigate } from 'react-router-dom';

const bene = [1,2,3,4,5,6,7,8]

export const BeneficiariesTransfer = () => {
    const navigate = useNavigate()

    return (
        <>
        <PrivateHader />
         <Container className='p-60 color container-beneficiaries-transfer'>
             <Row>
                 <Col className='d-flex flex-column justify-content-center align-items-center'>
                     <Step  step={2} />
                     <div className="content-beneficiaries-transfer shadowI">
                         <div className="card-input-beneficiaries-transfer">
                                 <input type="text" className='input' placeholder='Buscar beneficiário'/>
                                 <BsSearch className='icon-search-transfer' />
                         </div>
                           
                           { bene.map(i => (
                                <div className="card-benficiaries-transfer">
                                <img src={ImgMorrocos} alt="Image of the flag Morroco" className='img-flag-transfer-benficiary' />
                                <p>Youssef Naim</p>
                                <div>
                                   <Button className='btn-details-transfer'>DETALHES</Button>
                                   <Button className='btn-select-transfer' onClick={() => navigate('/transfer/beneficiary-receive')}>SELECIONAR</Button>
                                </div>
                            </div>
                           )) }

                         <Button className='btn-new-beneficiary-transfer' onClick={() => navigate('/transfer/payment')}>CADASTRAR NOVO BENEFICIÁRIO</Button>
                     </div>
                 </Col>
             </Row>
         </Container>
         <Footer />
        </>
    )
}