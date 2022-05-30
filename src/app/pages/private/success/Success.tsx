import './success.css';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { Footer } from '../../../shared/components/footer/Footer';
import { Step } from '../../../shared/components/step/Step';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImgTarget from '../../../assets/img/target.svg';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Loading } from './loading/Loading';

export const Success = () => {
    const [temp, setTemp] = useState<boolean>(false)

    useEffect(() => {
        time()
    }, [])

    function time() {
        setTimeout(() => {
            setTemp(true)
        }, 2000)
    }


    return (
        <>
            <PrivateHader />
            <Container className='container-transfer-success p-60 color'>
                <Step step={4} />
                {(temp === false) ? <Loading /> :

                    <div className="content-transfer-success shadowI row">
                        <div className="col-12 card-img-target">
                            <img src={ImgTarget} alt="Image of a arrow in the target" className='img-arrow-in-target' />
                        </div>
                        <div className="col-12 card-data-remittance-success">
                            <h4><b>Sua transferência foi realizada com sucesso!</b></h4>
                            <p className='mb-5'>Envie esse código para o beneficiário para que ele possa sacar o dinheiro</p>

                            <p className='text-data-success'>Beneficiário : Youssef</p>
                            <p className='text-data-success'>Valor a retirar: 2634,00 MAD</p>
                        </div>
                        <div className="col-12 card-remittance-pin shadowI">
                            <p>PIN DA REMESSA</p>
                            <h1><b>354651</b></h1>
                        </div>
                        <div className="col-12">
                            <p className='text-shared'><b>Compartilhe código com o beneficiário</b></p>
                            <div className='card-content-social'>
                                <div className="card-social">
                                    <BsWhatsapp className='icon-transfer-success' />
                                </div>
                                <div className="card-social">
                                    <BsInstagram className='icon-transfer-success' />
                                </div>
                                <div className="card-social">
                                    <FaFacebookF className='icon-transfer-success' />
                                </div>
                                <div className="card-social">
                                    <FaTelegramPlane className='icon-transfer-success' />
                                </div>
                                <div className="card-social">
                                    <MdEmail className='icon-transfer-success' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <Button className='btn-transfer-success'>VER MEUS ENVIOS</Button>
                        </div>
                    </div>
                }
            </Container>
            <Footer />
        </>
    )
}