import { EventHandler, MouseEventHandler } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import { Calculate } from '../../shared/components/calculate/Calculate';
import { Footer } from '../../shared/components/footer/Footer';
import { Header } from '../../shared/components/header/Header';
import { openQuestion1, openQuestion2, openQuestion3, openQuestion4, openQuestion5, openQuestion6, openQuestion7 } from '../../shared/redux/actions/question.action';
import { RootQuestions } from '../../shared/redux/reducers/question.reducer';
import { CardCarousel } from './cardCarousel/CardCarousel';
import './home.css';

interface RootQuestionsState {
    question: RootQuestions
}
export const Home = () => {
    const questions:RootQuestions = useSelector((state: RootQuestionsState) => state.question)
    const dispatch = useDispatch()
    return (
        <>
            <Header />
            <Container className="p-60 color session-1-home">
                {/* Transferir dinheiro / Calculador */}
                <Row>
                    <Col sm={12} md={12} lg={6} >
                        <h2 className='b f-size-3 mb-5'>Transferir dinheiro <br /> com 100% de segurança <br /> em 4 passos simples</h2>
                        <h4>A BT // é referência em transferência de <br /> dinheiro no mercado europeu desde 2004, <br /> abrangendo mais de 180 países.</h4>
                        <div className=" align-items-start mt-5 card-session-1">
                            <img src="/assets/img/shield.svg" alt="" />
                            <div className='margin-l-2'>
                                <p className='f-size-2'>Totalmente seguro! <br /> Garantido pelas leis do seu país.</p>
                            </div>
                        </div>
                        <div className="align-items-start  mt-5 card-session-1">
                            <img src="/assets/img/like.svg" alt="" />
                            <div className='margin-l-2'>
                                <p className='f-size-2'>100% de satisfação, de acordo <br /> com nossos clientes.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} className="card-session-1-calculate">
                        <Calculate />

                        <div className=" align-items-start mt-5 card-session-1-mobile">
                            <img src="/assets/img/shield.svg" alt="" />
                            <div className='margin-l-2'>
                                <p className='f-size-2'>Totalmente seguro! <br /> Garantido pelas leis do seu país.</p>
                            </div>
                        </div>
                        <div className=" align-items-start  mt-5 card-session-1-mobile">
                            <img src="/assets/img/like.svg" alt="" />
                            <div className='margin-l-2'>
                                <p className='f-size-2'>100% de satisfação, de acordo <br /> com nossos clientes.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Por que enviar dinehiro com a bt ? */}


                <h2 className='b f-size-3 title-absolute mb-5'>Por que enviar dinheiro  <br /> com a BT?</h2>
                <CardCarousel />
                <Row className='margin-b-80  card-carousel-desktop'>
                    <Col sm={12} md={4} >
                        <div className="card-session-2 shadowI">
                            <img src="assets/img/card01.svg" alt="card 01" className='mb-3' />
                            <h2 className='b f-size-2 mb-4'>Correspondente cambial de bancos do seu país.</h2>
                            <p>Lorem ipsum dolor sit amet, </p>
                            <p>consectetur adipiscing elit.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex justify-content-center">
                        <div className="card-session-2 shadowI">
                            <img src="assets/img/card02.svg" alt="card 02" className='mb-3' />
                            <h2 className='b f-size-2 mb-4'>Suporte para tirar dúvidas no seu idioma.</h2>
                            <p>Lorem ipsum dolor sit amet, </p>
                            <p>consectetur adipiscing elit.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex justify-content-end">
                        <div className="card-session-2 shadowI ">
                            <img src="assets/img/card03.svg" alt="card 03" className='mb-3' />
                            <h2 className='b f-size-2 mb-4'>Economize sempre.</h2>
                            <p>Lorem ipsum dolor sit amet, </p>
                            <p>consectetur adipiscing elit.</p>
                        </div>
                    </Col>

                </Row>
                {/* Um pouco mais sobre nós */}
                <Row className='mb-5'>
                    <Col sm={12} md={6} className="content-about-us">
                        <h2 className='b f-size-3 title-absolute mb-3 mt-3'>Um pouco mais <br /> sobre nós</h2>
                        <p className='mb-4'>Com 8 agências na Bélgica e 3 no Luxemburgo, regulamentadas e <br />
                            licenciadas pelo National Bank of Belgium, a BT // oferece qualidade, <br />
                            segurança e serviço personalizado.</p>
                        <p>Pagamento de contas sem altas taxas bancárias, ligações de longa <br />
                            distância internacionais com preço justo e câmbio de moeda <br />
                            estrangeira com atendimento personalizado nas agências são <br />
                            algumas das soluções oferecidas com excelência pela BT //.</p>
                    </Col>
                    <Col sm={12} md={6} className="d-flex justify-content-end">
                        <img src="assets/img/aboutUs.png" alt="about us" className='img-aboutUS' />
                    </Col>
                </Row>
            </Container>
            {/* Envie dinheiro com o melhor cambio da Europa */}
            <Container fluid className='container-session-3 mb-5'>
                <Container>
                    <Row className='session-3'>
                        <Col sm={12} md={6} className=" card-submit-session-3">
                            <h2 className='b f-size-3 title-absolute mb-5 mt-3 color-w'>Envie dinheiro com
                                <br /> o melhor câmbio da <br /> Europa.</h2>

                            <Button className='btn-start'>
                                COMEÇAR
                            </Button>
                        </Col>
                        <Col sm={12} md={6} className="d-flex justify-content-end">
                            <img src="assets/img/world.svg" alt="world" className='img-world' />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="p-60 color session-4-home">
                {/* Perguntas frequentes */}
                <Row>
                    <Col sm={12} className="content-questions">
                        <div className='d-flex mb-3'>
                            <img src="assets/img/question.svg" alt="question" className='margin-r-2' />
                            <h2 className='b f-size-3 title-absolute'>Perguntas frequentes</h2>
                        </div>
                        <div className='card-questions'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question1 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion1(!questions.question1))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question1 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        <div className='card-questions'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question2 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion2(!questions.question2))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question2 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        <div className='card-questions'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question3 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion3(!questions.question3))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question3 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        <div className='card-questions'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question4 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion4(!questions.question4))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question4 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        <div className='card-questions'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question5 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion5(!questions.question5))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question5 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        <div className='card-questions'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question6 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion6(!questions.question6))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question6 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        <div className='card-questions border-none'>
                            <div className='card-question-title'>
                                <p className='b'>Como enviar dinheiro para o exterior com a BT?</p>
                                <span className={`icon-more ${(questions.question7 ? 'icon-rotate': '')}`} onClick={ () => {
                                    dispatch(openQuestion7(!questions.question7))
                                }}>+</span>
                            </div>
                             {
                                 (questions.question7 == true) ? 
                                 <div>
                                     <p>ashdjadhkjhasdjkhasdjk</p>
                                 </div>:
                                 <></>
                             } 
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}