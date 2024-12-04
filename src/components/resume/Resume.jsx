'use client'

import { useEffect } from "react"
import './resume.scss'
import { FaCircleCheck, FaHandshake, FaLightbulb, FaSchool, FaVectorSquare } from "react-icons/fa6"

const Resume = () => {

    useEffect(() => {


        // using document object to target dom elements
        const selectNav = document.querySelectorAll(".navRef")
        const navFill = document.querySelectorAll(".fill")
        const selectContent = document.querySelectorAll(".content-item")
        const navRef = document.getElementById('navRefParent')
        const resumeContent = document.getElementById('resume-content')



        selectNav.forEach(nav => {

            // for scrolling to the appropriate content

            nav.addEventListener('click', () => {

                selectContent.forEach(content => {
                    if (content.id === nav.attributes['data-target'].value) {
                        resumeContent.scroll({
                            top: content.offsetTop - 3,
                            behavior: 'smooth'
                        })


                        // for adding active class to the appropriate and active nav button span
                        navFill.forEach(fill => {
                            fill.classList.remove('active')
                            if (fill.parentElement.attributes['data-target'].value === content.id) {
                                fill.classList.add('active')
                            }
                        })
                    }
                })
            })
        })

    }, [])

    return (
        <section className="resume" id="resume">

            <div class="title">
                <h2>My Resume</h2>
            </div>
            <div className="container">
                <div className="resume-nav" id='navRefParent'>
                    {/* <button className='navRef' data-target='education'> <FaSchool />
                        <span>Education</span> <span className='fill active'></span></button> */}
                    <button className='navRef' data-target='experience'> <FaHandshake />
                        <span>Experience</span> <span className='fill active'></span></button>
                    <button className='navRef' data-target='qualification'><FaVectorSquare />
                        <span>Qualifications</span> <span className='fill'></span></button>
                    <button className='navRef' data-target='proficiency'><FaVectorSquare />
                        <span>Technical Proficiency</span> <span className='fill'></span></button>

                    <button className='navRef' data-target='certifications'><FaVectorSquare />
                        <span>License & Certifications</span> <span className='fill'></span></button>
                    <button className='navRef' data-target='membership'>
                        <FaLightbulb />
                        <span>Membership & Affiliation</span> <span className='fill'></span>
                    </button>
                </div>


                <div id="resume-content" className='resume-content' >

                    <div class="content-item" id='experience'>
                        <div className="">
                            <ul className="">
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>A performance driven, electronic & digital business professional experience that cuts across governance, risk, compliance and regulations of payment cards, e-payment technology, digital business operations, business management & operational risk analysis. </p>
                                </li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>  Dedicated leader and has a track record in electronic banking/digital financial payments and exhibits deep versatility in electronic product, business innovations and project execution in the electronic/digital payment ecosystem. Has proven record of project handling, business development, implementation and execution. Resourceful Manager with know-how leading people in strategic planning, process management and improvement.</p> </li>

                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>   I have experience in account and card fraud analysis, data mining, conducting root cause analysis, good understanding of business regulations, operations and Strategic penetration. Excellent relationship with management, internal and external stakeholders. I look forward to assisting my organization maximize return on investment while strategically positioning myself to advance in my chosen career. </p> </li>


                            </ul>
                        </div>

                    </div>
                    <div class="content-item" id='qualification'>
                        <div className="">
                            <ul>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>  M.sc Applied Economics</p></li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>  B.sc Mathematics and Economics</p></li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-item" id='proficiency'>
                        <div className="">
                            <ul className="">
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p> Risk management</p></li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p> Compliance framework (NIST, ISO 27001)</p></li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p> Industry regulations (PCI DSS, HIPAA, GDPR)</p></li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p> Networking</p></li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>PCI DSS- Implementation and Training</p></li>
                            </ul>
                        </div>
                    </div>

                    <div class="content-item" id='certifications'>
                        <div className="">
                            <ul>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>Postilion Certificate of Competence for S1 Corporation</p></li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>Cisco Certified Network Associate (CCNA)</p></li>
                            </ul>
                        </div>

                    </div>
                    <div class="content-item" id='membership'>
                        <div className="">
                            <div className="">
                                <p>A member of American Economic Association (AEA) and National Association of Business Economists (NABE)</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section >
    )
}

export default Resume