

'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.scss';

// import required modules
import { EffectCards } from 'swiper/modules';

const SportSwiper = () => {

    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="sport-swiper mySwiper"
            >
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/thesunnigeria_461442911_929226569239161_7043063996820766314_n.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="tour-pics">
                        <img src="./pics/tour-pics/Alukimba Picture 1.jpg" alt="" />
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
                        <img src="./pics/tour-pics/download (2).jpg" alt="" />
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