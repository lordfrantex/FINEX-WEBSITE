
'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./testimonial.scss";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";


// React icons
import Image from "next/image";
import { Yellowtail } from 'next/font/google'
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
const yellowtail = Yellowtail({ subsets: ['latin'], weight: "400", display: "swap" })


const Testimonial = () => {

    const testimony = [
        {
            img: '/pics/nurse.png',
            name: "Mr C. Henry",
            position: "C.E.O of Gadjet Care Technology",
            testimony: "Thanks to Finex health, they are really amazing. They analyzed all my health records with ease and helped with the visualization as well.",

        },
        {
            img: '/pics/nurse.png',
            name: "Mrs A. Susan",
            position: "C.E.O of Gadjet Care Technology",
            testimony: "Finex service is the best and very reliable. They visualized all my health records, and their decision based on the analysis is very accurate.",

        },
        {
            img: '/pics/nurse.png',
            name: "Martins",
            position: "C.E.O of Gadjet Care Technology",
            testimony: "I must commend Finex health care for their sports engagement, they are the best I would recommend.",

        },
        {
            img: '/pics/nurse.png',
            name: "Allen James",
            position: "C.E.O of Gadjet Care Technology",
            testimony: "Finex is very good at visualization and analysis, together with appropriate documentation. They are the best.",

        },





    ]
    const mapTestimonies = testimony.map((testimony, index) => {
        return (
            <SwiperSlide key={index}>
                <div className="testifiers">
                    <span className="right-quote">
                        <FaQuoteRight />
                    </span>
                    <span className="left-quote">
                        <FaQuoteLeft />
                    </span>

                    {/* <div className="image">
                        <Image src={testimony.img} alt="" fill />

                    </div> */}
                    <div className="texts">
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>
                        <p>{testimony.testimony}</p>
                        <div className="name">
                            <span>{testimony.name}</span>
                            {/* <span>{testimony.position}</span> */}
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <section className='testimonial'>
            <div className="heading-texts text-center">
                <h3 className={`${yellowtail.className} text-white fw-bold fs-1`}>Customers Testimonials</h3>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                slidesPerView="auto"
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="container"
            >
                {mapTestimonies}

            </Swiper>

        </section>
    )
}

export default Testimonial