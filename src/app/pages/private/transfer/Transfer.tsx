import './transfer.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Footer } from '../../../shared/components/footer/Footer';
import { PrivateHader } from '../../../shared/components/prvateHeader/PrivateHeader';
import { Step } from '../../../shared/components/step/Step';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import currencyFormatter from 'currency-formatter'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';


const country = [
    {
        label: <div className='card-img-flags'><img src="https://flagcdn.com/be.svg" className='img-flags' alt="" /> EUR</div>,
        value: "BE"
    },
    {
        label: <div className='card-img-flags'><img src="assets/img/Brasil.svg" className='img-flags' alt="" /> BRL</div>,
        value: "BR"
    },
    {
        label: <div className='card-img-flags'><img src="https://flagcdn.com/ma.svg" className='img-flags' alt="" /> MAD</div>,
        value: "MA"
    },

];


interface Currency {
    label: JSX.Element,
    value: string
}

export const Transfer = () => {
    const navigate = useNavigate();

    const [currency, setCurrency] = useState<Currency>({
        label: <div className='card-img-flags'><img src="https://flagcdn.com/be.svg" className='img-flags' alt="" /> EUR</div>,
        value: "BE"
    })
    const [currency2, setCurrency2] = useState<Currency>({
        label: <div className='card-img-flags'><img src="https://flagcdn.com/be.svg" className='img-flags' alt="" /> EUR</div>,
        value: "BE"
    })

    const [maskCurrency, setMaskCurrency] = useState({ value: 100, mask: currencyFormatter.format(100, { code: 'EUR' }) });

    const [value, setValue] = useState<string>();

    function formatter(e: KeyboardEvent) {
        //EUR 1.500,55

        //    const value = parseFloat( e.)
        //     const currency = currencyFormatter.format(100, { code: 'EUR' })
        //      setValue(currency)



    }

    return (
        <>
            <PrivateHader />
            <Container className='p-60 container-transfer color'>
                <Row>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <Step step={1} />
                        <div className="card-calculate-transfer shadowI">
                            <b className='mb-1'>você envia</b>
                            <div className='input-card-global mb-3'>
                                <input type="text" className='input' value={maskCurrency.mask} onKeyUp={formatter}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMaskCurrency({ value: 100, mask: currencyFormatter.format(parseFloat(e.target.value), { code: 'EUR' }) })} />
                                <Select className='select-country-amount' value={currency} />
                            </div>
                            <p>Cotação: 1 EUR = 655,957 MAD</p>
                            <b>Beneficiário recebe</b>
                            <div className='input-card-global mb-4'>
                                <input type="number" className='input' />
                                <Select className='select-country-amount' options={country} value={currency2} onChange={(e: any) => { setCurrency2(e) }} />
                            </div>
                            <div className='row  p-mobile-calculte mb-5'>
                                <div className="col-6">
                                    <div className='card-types-payments'>
                                        <MdKeyboardArrowDown className='i' />
                                        <div>
                                            <p><b>Cartão de crédito/débito</b></p>
                                            <p>Pague o seu envio usando seu cartão.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <p>Taxa de serviço: <b>5,00 €</b> </p>
                                </div>
                            </div>
                            <div>
                                <p>Você pode economizar até <b>115,00 MAD</b> em relação a um banco tradicional.</p>
                                <p>Deve chegar: <b>em 24 horas</b></p>
                            </div>
                            <div className="card-white-transfer">
                                <p>Ao continuar, você aceita os Termos de uso de nossa empresa belga autorizada pelo Banco 
                                    Centra da Bélgica (NBB - RN 829.975.253) a prestar serviços de câmbio.</p>
                            </div>
                            <div className='total-payments mt-5'>
                                <p><b>Total a pagar</b></p>
                                <p><b>250,00 EUR</b></p>
                            </div>

                            <Button className="btn-card-transfer mt-4" onClick={() => navigate('/transfer/beneficiaries')} >PRÓXIMO</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}