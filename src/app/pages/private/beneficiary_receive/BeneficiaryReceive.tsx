import './beneficiaryReceive.css';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { Footer } from '../../../shared/components/footer/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Step } from '../../../shared/components/step/Step';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BeneficiaryReceive = () => {
    const [deposit, setDeposit] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <>
            <PrivateHader />
            <Container className='p-60 container-beneficiary-receive color'>
                <Step step={2} />
                <div className="content-benficiary-receive shadowI">
                    <div className="card-account-deposit">
                        <div className='card-header-account-deposit'>
                            <input type="radio" name="" id="" className='radio-beneficiary-receiver' checked={deposit} onClick={ () => setDeposit(!deposit) } />
                            <div>
                                <p><b>Depósito na conta bancária - <span>48h</span></b></p>
                                <p className='text-receive'>A pessoa recebe o dinheiro na conta dela</p>
                            </div>
                        </div>
                        {deposit === true ? <>
                            <p className='text-bank mt-5'>Nome  do Banco</p>
                            <div className="input-bank-receive">
                                <input type="text" name="" id="" className='input' />
                                <IoIosArrowDown className='icon-receive-account' />
                            </div>
                            <p className='text-bank'>Tipo de conta</p>
                            <div className="input-bank-receive">
                                <input type="text" name="" id="" className='input' />
                                <IoIosArrowDown className='icon-receive-account' />
                            </div>
                            <div className='row mt-3'>
                                <div className="col-6 ">
                                    <p className='text-bank'>Código da agência</p>
                                    <div className='input-bank-receive'>
                                        <input type="text" className='input' />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <p className='text-bank'>Número da conta</p>
                                    <div className='input-bank-receive'>
                                        <input type="text" className='input' />
                                    </div>
                                </div>
                            </div>

                        </> : <></>}
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 d-flex">
                            <Button className='btn-back btn-back-receive' onClick={() => navigate('/transfer/beneficiary-receive')}>VOLTAR</Button>
                            <Button className='btn-next btn-next-receive' onClick={() => navigate('/transfer/payment')}>PRÓXIMO</Button>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer />
        </>
    )
}