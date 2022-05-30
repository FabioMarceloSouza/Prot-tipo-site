import './step.css';

interface Props {
    step: number
}

export const Step = ({ step } : Props) => {
     
    if(step === 1) {
        return (
            <div className={`steps`}>
                <div className="box-step-focus">
                    <div className="circle-step-focus">
                        1
                    </div>
                    <p className="text-step">Quantia</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step">
                    <div className= "circle-step">2</div>
                    <p className="text-step">Beneficiário</p>
                </div>
                <div className="row-white"></div>
                <div className="box-step">
                    <div className="circle-step">3</div>
                    <p className="text-step">Pagamento</p>
                </div>
                <div className="row-white"></div>
                <div className="box-step">
                    <div className="circle-step">4</div>
                    <p className="text-step">Verificação</p>
                </div>
            </div>
        )
     }else if(step == 2) {
        return (
            <div className={`steps`}>
                <div className="box-step-focus">
                    <div className="circle-step-focus">
                        1
                    </div>
                    <p className="text-step">Quantia</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step-focus">
                    <div className="circle-step-focus">2</div>
                    <p className="text-step">Beneficiário</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step">
                    <div className="circle-step">3</div>
                    <p className="text-step">Pagamento</p>
                </div>
                <div className="row-white"></div>
                <div className="box-step">
                    <div className="circle-step">4</div>
                    <p className="text-step">Verificação</p>
                </div>
            </div>
        )
     }else if(step === 3) {
        return (
            <div className={`steps`}>
                <div className="box-step-focus">
                    <div className="circle-step-focus">
                        1
                    </div>
                    <p className="text-step">Quantia</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step-focus">
                    <div className= "circle-step-focus">2</div>
                    <p className="text-step">Beneficiário</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step-focus">
                    <div className="circle-step-focus">3</div>
                    <p className="text-step">Pagamento</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step">
                    <div className="circle-step">4</div>
                    <p className="text-step">Verificação</p>
                </div>
            </div>
        )
     }else if(step === 4) {
        return (
            <div className={`steps`}>
                <div className="box-step-focus">
                    <div className="circle-step-focus">
                        1
                    </div>
                    <p className="text-step">Quantia</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step-focus">
                    <div className= "circle-step-focus">2</div>
                    <p className="text-step">Beneficiário</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step-focus">
                    <div className="circle-step-focus">3</div>
                    <p className="text-step">Pagamento</p>
                </div>
                <div className="row-green"></div>
                <div className="box-step-focus">
                    <div className="circle-step-focus">4</div>
                    <p className="text-step">Verificação</p>
                </div>
            </div>
        )
     }else {
         return <h1>Carregando...</h1>
     }

}