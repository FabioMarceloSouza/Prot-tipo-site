import './cardCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const CardCarousel = () => {
    return (
        <Carousel
            showIndicators={false}
            emulateTouch={true}
            centerSlidePercentage={80}
            showThumbs={false}
            showArrows={false}
            centerMode={true}
            showStatus={false}
            verticalSwipe="standard"
            className='card-crousel-mobile'
        >
            <div className="card-session-2 shadowI margin-l-1 mt-1" style={{ width: 300 }}>
                <img src="assets/img/card01.svg" alt="card 01" className='mb-3' />
                <h2 className='b f-size-2 mb-4'>Correspondente cambial de bancos do seu país.</h2>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
            </div>
            <div className="card-session-2 shadowI margin-l-3  mt-1" style={{ width: 300 }}>
                <img src="assets/img/card02.svg" alt="card 02" className='mb-3' />
                <h2 className='b f-size-2 mb-4'>Suporte para tirar dúvidas no seu idioma.</h2>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
            </div>
            <div className="card-session-2 shadowI margin-l-2  mt-1" style={{ width: 300 }}>
                <img src="assets/img/card03.svg" alt="card 03" className='mb-3' />
                <h2 className='b f-size-2 mb-4'>Economize sempre.</h2>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
            </div>
        </Carousel>
    )
}
