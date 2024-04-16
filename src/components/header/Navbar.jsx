import React from 'react'
import { FaBars } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import Hero from './Hero';
const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container ">
                    <a className="navbar-brand" href="#"><Image className='' src='/pics/logo.png' width={100} height={80} alt='' /></a>
                    <button className="navbar-toggler border-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active " aria-current="page" href="#">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " href="#about-us">About Us</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " href="#services">Services</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " href="#team">Team</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" href="#contact">Contact Us</Link>
                            </li>




                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar