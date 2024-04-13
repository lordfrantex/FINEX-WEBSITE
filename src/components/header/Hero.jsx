'use client'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Image from 'next/image'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import "./header-style.scss";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
    const items = [
        {
            title: 'We Analyze Patient Health Record For Informed Descision.',
            image: '/pics/doctor.png',
            desc: 'At Finex, we read, compile, and extract clients medical report and analyze them for making desicions.'
        },
        {
            title: 'We Analyze Patient Health Record For Informed Descision.',
            image: '/pics/doctor.png',
            desc: 'At Finex, we read, compile, and extract clients medical report and analyze them for making desicions.'
        },
        {
            title: 'We Analyze Patient Health Record For Informed Descision.',
            image: '/pics/doctor.png',
            desc: 'At Finex, we read, compile, and extract clients medical report and analyze them for making desicions.'
        },

    ]
    const mapItems = items.map((item, i) => {
        return (
            <SwiperSlide>
                <div className="container ">
                    <div className="row g-4 align-items-center hero-section">
                        <div className="col-12 col-md-6">
                            <div className="">
                                <h1 className="text-white">{item.title}</h1>
                                <p className="text-white">{item.desc}</p>
                                <div>
                                    <button className="btn text-white appointment rounded-pill px-3 p-2">Book an Appointment <span className="appointment-arrow "><FaArrowRight className="text-white arrow" /></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="image  position-relative ms-5">
                                <Image src={item.image} alt="" width={500} height={500} />
                                <div className="span1">
                                    <Image src='/pics/chart3.png' alt="" width={100} height={100} />
                                </div>
                                <div className="span2">
                                    <Image src='/pics/blob2.png' alt="" width={450} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        )
    })
    return (
        <>
            {/* <Swiper className="mySwiper"


                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
            >
                {mapItems}
            </Swiper> */}
            <section className="hero-cover">
                <div className="container ">
                    <div className="row g-4 align-items-center hero-section">
                        <div className="col-12 col-md-6">
                            <div className="">
                                <h1 className="text-white fs-1 fw-bold ">We Analyze Patient Health Record For Informed Descision.</h1>
                                <p className="text-white ">At Finex, we read, compile, and extract clients medical report and analyze them for making desicions.</p>
                                <div>
                                    <button className="text-center text-md-left d-inline-block btn text-white appointment rounded-pill px-3 p-2">Book an Appointment <span className="appointment-arrow "><FaArrowRight className="text-white arrow" /></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="image z-1  position-relative ms-md-5">

                                <Image className="hero-image" src='/pics/doctor.png' alt="" width={500} height={500} />

                                <div className="span1">
                                    <Image src='/pics/chart3.png' alt="" width={80} height={80} />
                                </div>
                                <div className="span2">
                                    <Image src='/pics/blob2.png' alt="" width={450} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
