import './myAccount.css';
import { useState, useEffect, useRef, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { Footer } from '../../../shared/components/footer/Footer';
import { SideMenu } from '../../../shared/components/sidemenu/SideMenu';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { DropZone } from '../../../shared/components/drop_zone/DropZone';
import { Link } from 'react-router-dom';
import ImgMasterCard from '../../../assets/img/mastercard.svg';
import ImgFabio from '../../../assets/img/fabio.jpg';
import ImgTrustly from '../../../assets/img/trustly.svg';
import { valueTernary } from 'react-select/dist/declarations/src/utils';

interface Radio {
    card: boolean, 
    bank: boolean, 
    trustly: boolean
}

interface Card {
    cardM1: boolean,
    cardM2: boolean
}

export const MyAccount = () => {
    const history = useNavigate();
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [documents, setDocuments] = useState(false)
    const [update, setUpdate] = useState(false)
    const [ctc, setCtc] = useState()
    const [upaload, setUpload] = useState<string | null | ArrayBuffer>('')
    const [radio, setRadio] = useState<Radio>({ card: false, bank: false, trustly: false })
    const [card, setCard] = useState<Card>({ cardM1:false, cardM2: false })
     
    const handleCardRadio = (e : ChangeEvent<HTMLInputElement>) => {
        const {  id, checked} = e.target
         
        if(id === 'cardM1'){ 
             setCard({ cardM1: true, cardM2: false })
        }else if(id === 'cardM2'){
            setCard({ cardM1: false, cardM2: true })
        }
    }

    const handleClickCardRadio = (e : MouseEvent<HTMLInputElement>) => {
        const {  id } = e.currentTarget
         
        if(id === 'cardM1'){ 
             setCard({ cardM1: true, cardM2: false })
        }else if(id === 'cardM2'){
            setCard({ cardM1: false, cardM2: true })
        }
    }


    const handleRadio = (e : ChangeEvent<HTMLInputElement>) => {
         const {  id, checked} = e.target

         if(id === 'card'){         
             setRadio( { card: true, bank: false, trustly: false  })
         }else if(id === 'bank') {
            setRadio( { card: false, bank: true, trustly: false  })
         }else if(id === 'trustly'){
            setRadio( { card: false, bank: false, trustly: true  })
         }
    }

    const handleClickRadio = (e : MouseEvent<HTMLInputElement>) => {
        const {  id, checked} = e.currentTarget

        if(id === 'card'){         
            setRadio( { card: true, bank: false, trustly: false  })
        }else if(id === 'bank') {
           setRadio( { card: false, bank: true, trustly: false  })
        }else if(id === 'trustly'){
           setRadio( { card: false, bank: false, trustly: true  })
        }
    }

    

    const setImage = (data: string | null | ArrayBuffer) => {
        setUpload(data)
    }

    const ref = useRef<HTMLInputElement | null>(null)

    return (
        <>
            <PrivateHader />
            <Container className='p-60 container-my-account color'>
                <Row className='justify-content-between'>
                    <SideMenu />
                    <Col md={9}>
                        <h4><b>Minha conta</b></h4>
                        <p>Edite seus dados pessoais</p>
                        <div className="content-my-account shadowI">
                            <div className='row'>
                                <div className="col-6 card-pointer">
                                    <p className='color b center '>Meus dados</p>
                                </div>
                                <div className="col-6 card-pointer-right gray " style={{ cursor: 'pointer' }} onClick={() => setDocuments(true)} >
                                    <span className='color ' style={{ width: 40 }}>Documentos</span>
                                </div>
                            </div>
                            <div className="p-account">
                                <div className="row content-data-my-account-1">
                                    <div className="col-12 mb-5">
                                        <img src={ImgFabio} alt="image of the user" className='img-user' />
                                        <Link to="#">Adicionar uma nova foto a conta</Link>
                                    </div>
                                    <h5><b>Dados da conta</b></h5>
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-email'>
                                            <p>Email</p>
                                            <p><b>fabio@gmail.com</b></p>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-phone'>
                                            <p>Celular</p>
                                            <p><b>+21248 31654-4578</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row content-data-my-account-1">
                                    <div className='text-edit-data-my-account'>
                                        <h5><b>Dados Pessoais</b></h5>
                                        <MdModeEditOutline className='icon-edit-account' />
                                        <p><b>Editar dados</b></p>
                                    </div>
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-email'>
                                            <p>Nome</p>
                                            <p><b>Fábio</b></p>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-phone'>
                                            <p>Sobrenome</p>
                                            <p><b>Marcelo</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row content-data-my-account-1">
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-email'>
                                            <p>Data de nascimento</p>
                                            <p><b>06/05/1998</b></p>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-phone'>
                                            <p>Emprego</p>
                                            <p><b>Alista de sistema</b></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row content-data-my-account-1">
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-email'>
                                            <p>Endereço</p>
                                            <p><b>Avenida Marte</b></p>
                                        </div>
                                    </div>
                                    <div className="col-4 d-flex card-data-accont-1">
                                        <div className='card-account-phone'>
                                            <p>Código postal</p>
                                            <p><b>30690336</b></p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row ">
                                            <div className="col-4 d-flex card-data-accont-1">
                                                <div className='card-account-email'>
                                                    <p>Cidade</p>
                                                    <p><b>Belo Horizonte</b></p>
                                                </div>
                                            </div>
                                            <div className="col-4 d-flex card-data-accont-1">
                                                <div className='card-account-phone'>
                                                    <p>País</p>
                                                    <p><b>Brasil</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Métodos de pagamento*/}
                                <div className="row mt-5">
                                    <h5><b>Métodos de pagamento</b></h5>
                                    <div className="card-payment-methods-account" id="cardM1" onClick={handleClickCardRadio}>
                                        <div className='d-flex align-items-center'>
                                            <input type="radio" name="card-payment" id="cardM1" checked={card.cardM1} onChange={handleCardRadio} />
                                            <div className='circle-type-payment-account'>
                                                <img src={ImgMasterCard} alt="Card type of the payment" />
                                            </div>
                                            <div className='text-card-payment-methods-account'>
                                                <p><b>BT// Mastecard Black</b></p>
                                                <p>Final ***** 1257</p>
                                            </div>
                                        </div>
                                        <BsTrash className='icon-trash-account' />
                                    </div>
                                    <div className="card-payment-methods-account" id="cardM2" onClick={handleClickCardRadio}>
                                        <div className='d-flex align-items-center' >
                                            <input type="radio" name="card-payment" id="cardM2" checked={card.cardM2} onChange={handleCardRadio}/>
                                            <div className='circle-type-payment-account'>
                                                <img src={ImgMasterCard} alt="Card type of the payment" />
                                            </div>
                                            <div className='text-card-payment-methods-account'>
                                                <p><b>BT// Mastecard Black</b></p>
                                                <p>Final ***** 1257</p>
                                            </div>
                                        </div>
                                        <BsTrash className='icon-trash-account' />
                                    </div>
                                </div>
                                {/*Outros Métodos */}
                                <div className="row mt-5">
                                    <h5><b>Outros Métodos</b></h5>
                                    <div className="card-payment-methods-account" id="card" onClick={handleClickRadio}>
                                        <div className='d-flex align-items-center'>
                                            <input type="radio" name='payment' id="card" checked={radio.card} onChange={handleRadio}/>
                                            <div className='circle-type-payment-account'>
                                                <AiOutlineCreditCard className='icon-other-methods-account' />
                                            </div>
                                            <div className='text-card-payment-methods-account'>
                                                <p><b>Adicionar novo cartão</b></p>
                                                <p>Débito ou Crédito</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-payment-methods-account" id="bank" onClick={handleClickRadio}>
                                        <div className='d-flex align-items-center'>
                                            <input type="radio" id="bank" name='payment' checked={radio.bank} onChange={handleRadio}/>
                                            <div className='circle-type-payment-account'>
                                                <FiSend className='icon-other-methods-account' />
                                            </div>
                                            <div className='text-card-payment-methods-account'>
                                                <p><b>Transferência bancária</b></p>
                                                <p>Adicionar nova conta</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-payment-methods-account" id="trustly" onClick={handleClickRadio}>
                                        <div className='d-flex align-items-center' >
                                            <input type="radio" name='payment' id='trustly' checked={radio.trustly}  onChange={handleRadio} />
                                            <div className='circle-type-payment-account'>
                                                <img src={ImgTrustly} alt="Image Company Trustly" />
                                            </div>
                                            <div className='text-card-payment-methods-account'>
                                                <p><b>Trustly</b></p>
                                                <p>Pague usando a sua conta</p>
                                            </div>
                                        </div>
                                    </div>
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