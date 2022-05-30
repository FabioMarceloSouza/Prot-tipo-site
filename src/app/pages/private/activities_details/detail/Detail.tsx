import './detail.css';
import { GoPrimitiveDot } from 'react-icons/go';


type Props = {
     name: string
}

export const Detail = ({ name }: Props) => {
    if (name == 'status') {
        return (
            <div className="col-md-12 mb-3 d-flex flex-column card-content-status-activities mt-2" style={{ fontSize: '0.9em'}}>
                <div className="row d-flex  mt-4  p-0 m-0 card-status-remittance">

                    <div className='col-4 d-flex  justify-content-end'><p style={{ margin: 0 }}>00/00/0000 as 14h00</p></div>
                    <div className="col-1 activity-center"> <div className="circle-status"></div> <div className='row-activity line-activity'></div>  </div>
                    <div className="col-7">
                        <p style={{ margin: 0 }}><b>Creado com sucesso</b></p>
                    </div>
                </div>
                <div className="row d-flex  p-0 m-0 card-status-remittance">
                    <div className="col-4 d-flex  justify-content-end"><p style={{ margin: 0 }}>00/00/0000 as 14h00</p></div>
                    <div className="col-1 activity-center"> <div className="circle-status"></div> <div className='row-activity'></div>  </div>
                    <div className="col-7 d-flex">
                        <p style={{ margin: 0 }}><b>Analisando documentos</b></p>
                    </div>
                </div>
                <div className="row d-flex  p-0 m-0 card-status-remittance">
                    <div className="col-4 d-flex  justify-content-end"> <p style={{ margin: 0 }}>00/00/0000 as 14h00</p></div>
                    <div className="col-1 activity-center"> <div className="circle-status"></div> <div className='row-activity'></div>  </div>
                    <div className="col-7">
                        <p style={{ margin: 0 }}><b>Processo de pagamento</b></p>
                        <p ><b style={{ color: 'var(--btn-one)' }}>Lembre-se</b> — Este processo pode levar até dois dias úteis para ser finalizado</p>
                    </div>
                </div>
                <div className="row d-flex p-0 m-0 card-status-remittance">
                    <div className="col-4  d-flex align-items-end  justify-content-end"> <p style={{ margin: 0 }}>----</p></div>
                    <div className="col-1 activity-center "> <div className='row-activity'></div> <div className="circle-status"></div>  </div>
                    <div className="col-7 d-flex align-items-end">
                        <p style={{ margin: 0 }}><b>Finalizado</b></p>
                    </div>
                </div>
            </div>
        )
    } else if (name == 'detail') {

        return (
            <div className="col-md-12 p-2 mt-2" >
                <div className='d-flex justify-content-between result-activity' style={{ fontSize: '0.9em'}}>
                    <div >
                        <p><b>Você envia</b></p>
                        <p>Comissão total</p>
                        <p>Quantia a ser convertida</p>
                        <p>Câmbio garantido (por 48horas)</p>
                        <p><b>Rafael recebe</b></p>
                        <p>Estimativa de entrega</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-end'>
                        <p><b>250,00 EUR</b></p>
                        <p>-17,24 EUR</p>
                        <p>250,00 EUR</p>
                        <p>4,46887 </p>
                        <p><b>2634,00 MAD</b></p>
                        <p>48 Horas</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-between mt-5">
                    <div className=' col-6'>
                        <p className='p-detail mb-2'><b style={{ color: 'var(--btn-one)' }}>Metodos de pagamento</b></p>
                        <p className='p-detail m-0' style={{ fontSize: 14 }}><b>Cartão de crédito/débito</b></p>
                        <p style={{ fontSize: 12 }}>Cartão Mastercard Final 5232</p>
                    </div>
                    <div className=' col-6 d-flex flex-column '>
                        <p className='p-detail mb-2'><b style={{ color: 'var(--btn-one)' }}>Recepção da transferência</b></p>
                        <p className='p-detail m-0' style={{ fontSize: 14 }}><b>Depósito na conta bancária - </b> </p>
                        <p style={{ fontSize: 12 }}>Conta final 203547</p>
                    </div>
                </div>
            </div>
        )
    }else {
        return <h1>Carregando...</h1>
    }
}
