import React from 'react'
import { FaBars } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import Hero from './Hero';
const Navbar = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div class="container ">
                    <a class="navbar-brand" href="#"><Image className='' src='/pics/logo.png' width={100} height={80} alt='' /></a>
                    <button class="navbar-toggler border-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FaBars />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li class="nav-item ">
                                <Link class="nav-link active " aria-current="page" href="#">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link " href="#about-us">About Us</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link " href="#services">Services</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link " href="#team">Team</Link>
                            </li>
                            <li class="nav-item ">
                                <Link class="nav-link" href="#contact">Contact Us</Link>
                            </li>




                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar