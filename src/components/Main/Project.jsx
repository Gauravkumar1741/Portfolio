import React from 'react';
import '../../pages/Project/ProjectPage.css'
//import { Link } from 'react-router-dom';
//import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-18.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Crop recommendation system</h3>
                            <p>
                                Crop recommendation system with plant disease identification
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> HTML
                                <span> -</span> CSS
                                <span> -</span> Javascript
                                <span> -</span> ML
                                <span> -</span> CNN
                            </p>
                            <a href="https://agrisens.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Gauravkumar1741/AgriSens.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-14.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Show Time</h3>
                            <p>
                                Ticket Booking Application
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> React.js             
                            </p>
                            <a href="https://showtime-ticket-booking.netlify.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Gauravkumar1741/showtime.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-17.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Xplore world</h3>
                            <p>
                                Travel tracking web application
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> HTML
                                <span> -</span> CSS
                                <span> -</span> Javascript
                                <span> -</span> React.js
                            </p>
                            <a href="https://github.com/Gauravkumar1741/world-wise-Travel.git" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Gauravkumar1741/world-wise-Travel.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            {/* <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);