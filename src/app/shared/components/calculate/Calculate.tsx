import './calculate.css';
import Select from 'react-select';
import { Button, Col, Row } from 'react-bootstrap';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import currencyFormatter from 'currency-formatter'
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router-dom';

const country = [
    {
        label: <div className='card-img-flags'><img src="https://flagcdn.com/be.svg"className='img-flags'  alt="" /> EUR</div>,
        value: "BE"
    },
    {
        label: <div className='card-img-flags'><img src="assets/img/Brasil.svg"className='img-flags'  alt="" /> BRL</div>,
        value: "BR"
    },
    {
        label: <div className='card-img-flags'><img src="https://flagcdn.com/ma.svg" className='img-flags'  alt="" /> MAD</div>,
        value: "MA"
    },
   
];

interface Currency {
    label : JSX.Element,
    value: string
}

export const Calculate = () => {
    const navigate = useNavigate()

    const [currency, setCurrency] = useState<Currency>( {
        label: <div className='card-img-flags'><img src="https://flagcdn.com/be.svg"className='img-flags'  alt="" /> EUR</div>,
        value: "BE"
    })
    const [currency2, setCurrency2] = useState<Currency>( {
        label: <div className='card-img-flags'><img src="https://flagcdn.com/be.svg"className='img-flags'  alt="" /> EUR</div>,
        value: "BE"
    })

    const [maskCurrency, setMaskCurrency] = useState<string>();

    type DefaulOptions = {
        significantDigits: number,
        thousandsSeparator: string,
        decimalSeparator: string,
        symbol: string
    }

    const defaultOptions = {
        significantDigits: 2,
        thousandsSeparator: ',',
        decimalSeparator: '.',
        symbol: '$'
      }

    const currencyFormatter = (value : string, defaultOptions: DefaulOptions) => {
        let valueI: number = parseFloat(value)
       console.log(value.replace(',','.')) 
      }

    

    return (
        <Row >
            <Col>
                <div className="card-calculate shadowI">

                    <b className='mb-1'>você envia</b>
                    <div className='input-card-global mb-3'>
                         <input type="text" className='input'   
                        
                        onChange={(e : ChangeEvent<HTMLInputElement>) => currencyFormatter(e.target.value, defaultOptions)} />
                        <Select className='select-country-amount'  value={currency}  /> 
                        
                    </div>
                    <p>Cotação: 1 EUR = 655,957 MAD</p>
                    <b>Beneficiário recebe</b>
                    <div className='input-card-global mb-4'>
                        <input type="number" className='input'  />
                        <Select className='select-country-amount' options={country} value={currency2} onChange={ (e : any)  => {setCurrency2(e)} } />
                    </div>
                    <div className='row  p-mobile-calculte'>
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
                    <div className='total-payments mt-5'>
                        <p><b>Total a pagar</b></p>
                        <p><b>250,00 EUR</b></p>
                    </div>

                    <Button className="btn-card-calculate mt-4" onClick={() => navigate('/transfer')}>PRÓXIMO</Button>
                </div>
            </Col>
        </Row>
    )
}