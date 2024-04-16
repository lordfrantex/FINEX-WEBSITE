import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './footer.scss'
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLocationDot, FaLocationPin, FaMessage, FaPhone, FaTiktok, FaTwitter } from 'react-icons/fa6'
const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <Image src="/pics/logo.png" width={120} height={100} className='' alt="" />
                            <p>At Finex healthcare analytics and informatics, our aim is to enhance the efficacy of the process of healthcare delivery.</p>
                            <div className='social-links'>
                                <h4>Follow us on:</h4>
                                <div className='d-flex gap-3'>
                                    <Link href=''><FaTwitter /></Link>
                                    <Link href=''><FaFacebook /></Link>
                                    <Link href=''><FaInstagram /></Link>
                                    <Link href=''><FaTiktok /></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#about-us">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#team">Team</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Contact Us</h5>
                            <p><FaLocationDot /> 123 Street, City, Country</p>
                            <p><IoIosMail /> info@example.com</p>
                            <p><FaPhone /> +123456789</p>

                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid text-center bg-white text-black p-3">Copyright @ 2024 Finex health All Rights Reserved</div>
            <a href='https://wa.me/+14244042013'> <Image src='/pics/whatsapp.png' className="position-fixed whatsapp-fixed bottom-0 end-0 m-3" width={50} height={50} alt="" /></a>

        </div>
    )
}

export default Footer