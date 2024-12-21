// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';

import '../css/Carousel.css'

import vestRose from '../assets/products/vest-rose.jpeg';
import macacoBranco from '../assets/products/macaq-branco.jpg';
import vestFloral from '../assets/products/vest-floral.jpg';
import sapato from '../assets/products/sapato.jpg';

export function Carousel() {
    return (
        <Swiper
            modules={[ Navigation, A11y, EffectCoverflow]}
            slidesPerView={2}
            threshold={2}
            navigation={true}
            loop={true}
            effect='coverflow'
        >
            <SwiperSlide>
                <div className='container-carousel-image'>


                    <img src={vestFloral} alt="logo" />


                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='container-carousel-image'>


                    <img src={vestRose} alt="logo" />


                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='container-carousel-image'>


                    <img src={sapato} alt="logo" />


                </div>
            
            </SwiperSlide>
            <SwiperSlide>
                <div className='container-carousel-image'>


                    <img src={macacoBranco} alt="logo" />


                </div>
            </SwiperSlide>

        </Swiper>
    )
}
