import { Button, Col, Container, Row } from 'react-bootstrap';
import { Footer } from '../../../shared/components/footer/Footer';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { SideMenu } from '../../../shared/components/sidemenu/SideMenu';
import './beneficiaries.css';
import { BsSearch, BsTrash } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ImgMorrocos  from '../../../assets/img/marrocos.svg';

const bene = [1, 2, 3, 4, 5, 6, 7, 8]

export const Beneficiaries = () => {

    return (
        <>
            <PrivateHader />
            <Container className='p-60 container-beneficiaries color'>
                <Row className='justify-content-between'>
                    <SideMenu />
                    <Col md={9} >
                        <div className='register-new-beneficiary'>
                            <div className='title-beneficiaries'>
                                <h4>Beneficiários</h4>
                                <p>Adicione, visualize e edite beneficiários.</p>
                            </div>
                            <Button className='btn-new-beneficiary'>CADASTRAR NOVO BENEFICIÁRIO</Button>
                        </div>
                        <div className='content-beneficiaries shadowI'>
                            <div className="input-search">
                                <input type="text" className='input' placeholder='Buscar beneficiário' />
                                <BsSearch className='icon-search' />
                            </div>
                            {bene.map(i => (
                                <div className='card-benficiaries'>
                                    <div className='d-flex align-items-center'>
                                        <img src={ImgMorrocos} alt="Flag from Morrocos" className='img-beneficiaries' />
                                        <p>Yourssef Naim</p>
                                    </div>
                                    <div>
                                        <BsTrash className='icon-trash' />
                                        <Button className='btn-back btn-edit-beneficiary'>EDITAR</Button>
                                        <Button className='btn-next btn-submit-beneficiary'>ENVIAR</Button>
                                    </div>
                                </div>
                            ))}

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
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
