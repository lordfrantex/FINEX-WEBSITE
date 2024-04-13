import React from 'react'
import Image from 'next/image'
import './footer.scss'
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaLocationPin, FaMessage, FaPhone } from 'react-icons/fa6'
const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <Image src="/pics/logo.png" width={120} height={100} className='' alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisi et dui luctus, at pulvinar nisl posuere.</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
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

        </div>
    )
}

export default Footer