import { Container, Button } from 'react-bootstrap';
import { Footer } from '../../../shared/components/footer/Footer';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { Step } from '../../../shared/components/step/Step';
import './payment.css';
import { IoIosArrowDown } from 'react-icons/io';
import ImgCupom from '../../../assets/img/cupom.svg';
import ImgMasterCard from '../../../assets/img/mastercard.svg';
import ImgTrustly from '../../../assets/img/trustly.svg';
import { FiCreditCard, FiSend } from 'react-icons/fi';
import { ChangeEvent, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface Methods {
    card: boolean,
    bank: boolean,
    trustly: boolean,
}

interface Card {
    card1: boolean,
    card2: boolean
}

export const Payment = () => {
    const [radio, setRadio] = useState<Methods>({ card: false, bank: false, trustly: false });
    const [radioCard, setRadioCard] = useState<Card>({ card1: false, card2: false });
    const [cupom, setCupom] = useState<boolean>(false);
    const navigate = useNavigate();


    const handleChanegRadioCard = (e: ChangeEvent<HTMLInputElement>) => {
        const { id } = e.target

        if (id === 'card1') {
            setRadioCard({ card1: true, card2: false })
            setRadio({ card: false, bank: false, trustly: false })
        } else if (id === 'card2') {
            setRadioCard({ card1: false, card2: true })
            setRadio({ card: false, bank: false, trustly: false })
        }
    }

    const handleMouseRadioCard = (e: MouseEvent<HTMLInputElement>) => {
        const { id } = e.currentTarget

        if (id === 'card1') {
            setRadioCard({ card1: true, card2: false })
            setRadio({ card: false, bank: false, trustly: false })
        } else if (id === 'card2') {
            setRadioCard({ card1: false, card2: true })
            setRadio({ card: false, bank: false, trustly: false })
        }
    }


    const handleChanegRadio = (e: ChangeEvent<HTMLInputElement>) => {
        const { id } = e.target

        if (id === 'card') {
            setRadio({ card: true, bank: false, trustly: false })
        } else if (id === 'bank') {
            setRadio({ card: false, bank: true, trustly: false })
        } else if (id === 'trustly') {
            setRadio({ card: false, bank: false, trustly: true })
        }
    }

    const handleMouseRadio = (e: MouseEvent<HTMLInputElement>) => {
        const { id } = e.currentTarget

        if (id === 'card') {
            setRadio({ card: true, bank: false, trustly: false })
        } else if (id === 'bank') {
            setRadio({ card: false, bank: true, trustly: false })
        } else if (id === 'trustly') {
            setRadio({ card: false, bank: false, trustly: true })
        }
    }

    return (
        <>
            <PrivateHader />
            <Container className='container-payment p-60 color'>
                <Step step={3} />
                <div className="card-resume-payment shadowI">
                    <h4 className='mb-3'><b>Resumo</b></h4>
                    <div className="result-payment-card">
                        <p>Você envia</p>
                        <p><b>250,00 EUR</b></p>
                    </div>
                    <div className="result-payment-card">
                        <p>Taxa de serviço</p>
                        <p><b><s>4,00 EUR</s></b></p>
                    </div>
                    <div className="result-payment-card bg-blue">
                        <p>Total a pagar</p>
                        <p><b>250,00 EUR</b></p>
                    </div>
                    <div className="result-payment-card ">
                        <p>Você enviar</p>
                        <p><b>250,00 EUR</b></p>
                    </div>
                    <div className="result-payment-card">
                        <p>Beneficiário recebe</p>
                        <p><b>2634,00 MAD</b></p>
                    </div>
                    <div className="add-cupom" onClick={() => setCupom(!cupom)}>
                        <div className='card-add-cupom '>
                            <img src={ImgCupom} alt="Image of the cupom" />
                            <p>Adicionar um cupom de desconto</p>
                            <IoIosArrowDown className='icon-add-cupom' onClick={() => setCupom(!cupom)} />
                        </div>
                        {
                            (cupom === true) ?
                                <div className="card-input-add-cupom">
                                    <input type="text" name="" className="input-add-cupom" placeholder='Insira o código' />
                                    <Button className="btn-add-cupom">Aplicar</Button>
                                </div> : <></>
                        }
                    </div>
                </div>
                <div className="methods-payment shadowI">
                    <h4 className='mb-4'><b>Métodos de pagamento</b></h4>
                    <div className="card-payment-method" id="card1" onClick={handleMouseRadioCard}>
                        <input type="radio" name="payment-method" id="card1" className='radio-transfer-payment' checked={radioCard.card1} onChange={handleChanegRadioCard} />
                        <div className="card-circle-payment-methods">
                            <img src={ImgMasterCard} alt="" className='img-master-card' />
                        </div>
                        <div className='text-payment-card-methods'>
                            <p><b>BT// Mastecard Black</b></p>
                            <p className='text-number-card'>Final ***** 1257</p>
                        </div>
                    </div>
                    <div className="card-payment-method" id="card2" onClick={handleMouseRadioCard}>
                        <input type="radio" name="payment-method" id="card2" className='radio-transfer-payment' checked={radioCard.card2} onChange={handleChanegRadioCard} />
                        <div className="card-circle-payment-methods">
                            <img src={ImgMasterCard} alt="" className='img-master-card' />
                        </div>
                        <div className='text-payment-card-methods'>
                            <p><b>BT// Mastecard Black</b></p>
                            <p className='text-number-card'>Final ***** 1257</p>
                        </div>
                    </div>

                    <h4 className='mb-4'><b>Outros Métodos</b></h4>

                    <div className="card-payment-method" id="card" onClick={handleMouseRadio}>
                        <input type="radio" name="payment-method" id="card" className='radio-transfer-payment' checked={radio.card} onChange={handleChanegRadio} />
                        <div className="card-circle-payment-methods">
                            <FiCreditCard className='icon-transfer-payment' />
                        </div>
                        <div className='text-payment-card-methods'>
                            <p><b>Adicionar novo cartão</b></p>
                            <p className='text-number-card'>Débito ou Crédito</p>
                        </div>
                    </div>
                    <div className="card-payment-method" id="bank" onClick={handleMouseRadio}>
                        <input type="radio" name="payment-method" id="bank" className='radio-transfer-payment' checked={radio.bank} onChange={handleChanegRadio} />
                        <div className="card-circle-payment-methods">
                            <FiSend className='icon-transfer-payment' />
                        </div>
                        <div className='text-payment-card-methods'>
                            <p><b>Transferência bancária</b></p>
                            <p className='text-number-card'>Envie para nossa conta</p>
                        </div>
                    </div>
                    <div className="card-payment-method" id="trustly" onClick={handleMouseRadio}>
                        <input type="radio" name="payment-method" id="trustly" className='radio-transfer-payment' checked={radio.trustly} onChange={handleChanegRadio} />
                        <div className="card-circle-payment-methods">
                            <img src={ImgTrustly} alt="" className='img-trustly' />
                        </div>
                        <div className='text-payment-card-methods'>
                            <p><b>Trustly</b></p>
                            <p className='text-number-card'>Pague usando a sua conta</p>
                        </div>
                    </div>
                    <div className="card-btn-transfer-payment">
                        <Button className='btn-back' onClick={() => navigate('/transfer/beneficiary-receive')}>VOLTAR</Button>
                        <Button className='btn-next' onClick={() => navigate('/transfer/success')}>PRÓXIMO</Button>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}