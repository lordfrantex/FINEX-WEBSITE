'use client'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Yellowtail } from "next/font/google";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useThemeContext } from '@/context/ThemeContext';

const yellowtail = Yellowtail({ subsets: ['latin'], weight: '400', display: 'swap' })

const Contact = () => {
    const { theme, setTheme, store, dispatch } = useThemeContext()


    const [isLoading, setIsLoading] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY
        ).then((result) => {
            toast.success("Email sent Successfully")

            setIsLoading(false)
        }, (error) => {
            toast.error("Something went wrong.")
            setIsLoading(false)

        });
    };

    return (
        <div className="container">

            {/* <div className="">
                Paracetamol:{store.paracetamol}
            </div> */}
            <ToastContainer />
            <form ref={form} onSubmit={sendEmail}>
                <h2 className={`${yellowtail.className} fw-bold text-center head-text`}>Contact Us</h2>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" name='from_name' placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name='from_email' placeholder="Enter your email" />
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="number">Phone Number:</label>
                            <input type="text" className="form-control" name='from_number' id="number" placeholder="Enter your number" />
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input type="text" className="form-control" name='from_address' id="address" placeholder="Enter your Address" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" id="message" name='message' rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button disabled={isLoading} type="submit" className=" w-100 my-3">{isLoading ? "Sending..." : 'Submit'}</button>
            </form>
        </div >
    )
}

export default Contact