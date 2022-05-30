import { Col, Container, Row } from 'react-bootstrap';
import './validateToken.css';
import { Header } from '../../shared/components/header/Header';
import { Footer } from '../../shared/components/footer/Footer';
import { RefObject, useEffect, useRef, useState } from 'react';

export const ValidateToken = () => {
    const [errorCode, setErrorCode] = useState(false)
    const [code1, setCode1] = useState({ value: '', focus: false })
    const [code2, setCode2] = useState({ value: '', focus: false })
    const [code3, setCode3] = useState({ value: '', focus: false })
    const [code4, setCode4] = useState({ value: '', focus: false })
    const [code5, setCode5] = useState({ value: '', focus: false })
    const [code6, setCode6] = useState({ value: '', focus: false })

    const refInput1 = useRef<HTMLInputElement | null>(null)
    const refInput2 = useRef<HTMLInputElement | null>(null)
    const refInput3 = useRef<HTMLInputElement | null>(null)
    const refInput4 = useRef<HTMLInputElement | null>(null)
    const refInput5 = useRef<HTMLInputElement | null>(null)
    const refInput6 = useRef<HTMLInputElement | null>(null)

    //fOCUS INPUT CODE /////
    useEffect(() => {
        refInput1?.current?.focus()


    }, [])

    useEffect(() => {
        if (code2.focus === true) {
            refInput2?.current?.focus()
        }
    }, [code2])
    useEffect(() => {
        if (code3.focus === true) {
            refInput3?.current?.focus()
        }
    }, [code3])
    useEffect(() => {
        if (code4.focus === true) {
            refInput4?.current?.focus()
        }
    }, [code4])
    useEffect(() => {
        if (code5.focus === true) {
            refInput5?.current?.focus()
        }
    }, [code5])
    useEffect(() => {
        if (code6.focus === true) {
            refInput6?.current?.focus()
        }
    }, [code6])
    return (
        <>
            <Header />
            <Container className='p-60'>
                <Row>
                    <Col>
                        <div className="card-login-code"  >
                            <div className='login-code-content' >
                                <p >Por favor não feche esta página.</p>
                                <h3 className='h3'>Enviamos para o seu e-mail um</h3>
                                <h3 className='h3'>código de verificação da sua conta.</h3>

                                {errorCode ? <h4 className='errorCode'>Código Invalido favor verificar o E-mail ou Reenviar código.</h4> : <></>}

                                <div className='card-code'>
                                    <input ref={refInput1} maxLength={1} type="text" name="01" className='input-code'  value={code1.value} onChange={e => {
                                        setCode1({ ...code1, value: e.target.value })
                                        setCode2({ ...code2, focus: true })

                                    }} />
                                    <input maxLength={1} type="text" name="02" ref={refInput2} className='input-code'  value={code2.value} onChange={e => {
                                        setCode2({ ...code2, value: e.target.value })
                                        setCode3({ ...code3, focus: true })
                                    }} />
                                    <input maxLength={1} type="text" name="03" ref={refInput3} className='input-code'  value={code3.value} onChange={e => {
                                        setCode3({ ...code3, value: e.target.value })
                                        setCode4({ ...code4, focus: true })
                                    }} />
                                    <input maxLength={1} type="text" name="03" ref={refInput4} className='input-code'  value={code4.value} onChange={e => {
                                        setCode4({ ...code4, value: e.target.value })
                                        setCode5({ ...code5, focus: true })
                                    }} />
                                    <input maxLength={1} type="text" name="04" ref={refInput5} className='input-code'  value={code5.value} onChange={e => {
                                        setCode5({ ...code5, value: e.target.value })
                                        setCode6({ ...code6, focus: true })
                                    }} />
                                    <input maxLength={1} type="text" name="05" ref={refInput6} className='input-code'  value={code6.value} onChange={e => setCode6({ ...code6, value: e.target.value })} />
                                </div>
                                <button className='btn btn-primary  btn-code' >CONTINUAR</button>

                                <p className='p'>Ainda não recebeu a confirmação no seu e-mail cadastrado? <b><u className='submit-again-p'> Enviar novamente</u></b></p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}