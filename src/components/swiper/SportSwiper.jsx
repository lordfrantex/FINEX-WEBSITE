

'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.scss';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

const SportSwiper = () => {

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className="sport-swiper mySwiper"
            >

                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/Pix-1-1-3-1024x683.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/Chris-Anazia-Table-Tennis.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/Alukimba Picture 1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/thesunnigeria_461442911_929226569239161_7043063996820766314_n.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/Asemota-and-Uchechi-e1555521690271.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/download (1).jpg" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/download.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/FRL-Pe4WYAAvPyR.jpg" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
export default SportSwiper