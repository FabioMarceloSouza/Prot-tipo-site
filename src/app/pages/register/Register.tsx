import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Footer } from "../../shared/components/footer/Footer";
import { Header } from "../../shared/components/header/Header";
import { Formik, Form as IForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RiKeyFill } from 'react-icons/ri';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './register.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schemaLogin = yup.object().shape({
    email: yup.string().email("Favor inserir um e-mail valido!").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!").min(9, "Minino 9 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais!').required("Campo obrigatório!")
})

export const Register = () => {
    const navigate = useNavigate();
    const [eye, setEye] = useState({ eye1: false, eye2: false });

    return (
        <>
            <Header />
            <Container className="color container-form p-60">
                <p className="title-form">Seja Bem-vindo!</p>
                <Row>
                    <Col>
                        <div className="singIn">
                            <Formik
                                initialValues={{ email: '', password: '', confirmPassword: '' }}
                                onSubmit={() => { }}
                                validationSchema={schemaLogin}
                            >

                                {({ errors, touched }) => (
                                    <IForm >
                                        <div className="register d-flex">
                                            <div className="singIn-left-register" onClick={() => navigate('/login')} ><p className="singIn-left-text" onClick={() => navigate('/login')}>Entre</p></div>
                                            <div className="singIn-right-register" ><p className="singIn-right-text-register" >Cadastre-se</p></div>
                                        </div>
                                        <div className="select-form">
                                            Seu e-mail
                                            <div >
                                                <Field type="text" name="email" placeholder="Digite" component="input" className={`input input-select-form ${(errors.email && touched.email) ? 'border-error' : ''}`} />
                                            </div>
                                            <ErrorMessage name='email' className="error" component="span" />
                                            <p className="platform ">Será seu login para entrar na plataforma</p>
                                            Crie sua senha
                                            <div className="d-flex align-items-center" >
                                                <Field type={`${eye.eye1 == false ? 'password': 'text'}`} name="password"  placeholder="Digite" component="input" className={`input input-select-form ${(errors.password && touched.password) ? 'border-error' : ''}`} />
                                                
                                                { eye.eye1 == false ? <AiFillEyeInvisible className="icon-eye" onClick={() => setEye({...eye, eye1:true })} />  : <AiFillEye className="icon-eye" onClick={() => setEye({...eye, eye1: false })} /> }
                                            </div>
                                            <ErrorMessage name='password' className="error" component="span" />
                                            <div className='balloon'>
                                                <p>Lembre-se, sua senha deve conter <b>uma letra um</b> </p>
                                                <p><b>número</b> e ter pelo menos <b>9 caracteres.</b></p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2" >
                                                <Field type={`${eye.eye2 == false ? 'password': 'text'}`} name="confirmPassword" placeholder="Digite" component="input" className={`input input-select-form ${(errors.confirmPassword && touched.confirmPassword) ? 'border-error' : ''}`} />
                                                { eye.eye2 == false ? <AiFillEyeInvisible className="icon-eye" onClick={() => setEye({...eye, eye2:true })} />  : <AiFillEye className="icon-eye" onClick={() => setEye({...eye, eye2: false })} /> }
                                            </div>
                                            <ErrorMessage name='confirmPassword' className="error" component="span" />
                                        </div>
                                        <div className="btn-singIn">
                                            <Button className="btn-back " >VOLTAR</Button>
                                            <Button className="btn-next " type='submit'>PRÓXIMO</Button>
                                        </div>
                                        <div className="p-3">
                                            <p className="terms">Ao se cadastrar automaticamente você aceita os <b><u>termos</u></b></p>
                                        </div>
                                    </IForm>
                                )}

                            </Formik>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}