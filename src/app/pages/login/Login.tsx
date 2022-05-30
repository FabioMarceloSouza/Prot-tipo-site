import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Footer } from "../../shared/components/footer/Footer";
import { Header } from "../../shared/components/header/Header";
import { Formik, Form as IForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { RiKeyFill } from 'react-icons/ri';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import './login.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schemaLogin = yup.object().shape({
    email: yup.string().email("Favor inserir um e-mail valido!").required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!").min(9, "Minino 9 caracteres")
})

export const Login = () => {
      const navigate = useNavigate();
      const [eye, setEye] = useState({ eye1: false, eye2: false });

      //teste

    return (
        <>
            <Header />

            <Container className="color container-form p-60">
                <p className="title-form">Seja Bem-vindo!</p>
                <Row>
                    <Col>
                        <div className="singIn">
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                onSubmit={() => navigate('/private')}
                                validationSchema={schemaLogin}
                            >

                                {({ errors, touched }) => (
                                    <IForm >
                                        <div className="header-singIn">
                                            <div className="singIn-left" ><p className="singIn-left-text" >Entre</p></div>
                                            <div className="singIn-right"  onClick={() => navigate('/register')} ><p className="singIn-right-text" onClick={() => navigate('/register')}>Cadastre-se</p></div>
                                        </div>
                                        <div className="select-form">
                                            Seu e-mail
                                            <div >
                                                <Field type="text" name="email" placeholder="Digite" component="input"  className={`input input-select-form ${(errors?.email && touched.email )? 'border-error' : ''}`} />
                                            </div>
                                            <ErrorMessage name='email' className="error" component="span" />
                                            <p className="platform ">Use seu e-mail cadastrado para entrar na plataforma</p>
                                            Senha
                                            <div className="d-flex align-items-center" >
                                                <Field type={`${eye.eye1 == false ? 'password': 'text'}`} name="password"  placeholder="Digite" component="input" className={`input input-select-form ${(errors?.password && touched.password ) ? 'border-error' : ''}`} />
                                                { eye.eye1 == false ? <AiFillEyeInvisible className="icon-eye" onClick={() => setEye({...eye, eye1:true })} />  : <AiFillEye className="icon-eye" onClick={() => setEye({...eye, eye1: false })} /> }
                                            </div>
                                            <ErrorMessage name='password' className="error" component="span"/>
                                            <div className="d-flex align-items-center mt-2" >
                                                <RiKeyFill className="key-icon" />   <p className="password"> Esqueci a senha</p>
                                            </div>
                                        </div>
                                        <div className="btn-singIn">
                                            <Button className="btn-back " >VOLTAR</Button>
                                            <Button className="btn-next " type='submit'>ENTRAR</Button>
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
    );
};