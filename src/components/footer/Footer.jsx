import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './footer.scss'
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLocationDot, FaLocationPin, FaMessage, FaPhone, FaTiktok, FaTwitter } from 'react-icons/fa6'
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
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
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#about-us">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#team">Team</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p className='d-flex gap-3'> <span><FaLocationDot size={25} /></span>Broadway Street, Off Hawthorne Blvd, Hawthorne, CA, 90250</p>
                            <p><IoIosMail className='me-3' size={25} />service@finexhealth.com</p>
                            <p><FaPhone className='me-3' size={25} /> +14244042013</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid text-center bg-white text-black p-3">Copyright @ 2024 Finex health All Rights Reserved</div>
            <a href='https://wa.me/+14244042013'> <Image src='/pics/whatsapp.png' className="rounded-pill position-fixed whatsapp-fixed bottom-0 end-0 m-3" width={50} height={50} alt="" /></a>

        </div>
    )
}

export default Footer