'use client'

import { useEffect } from "react"
import './resume.scss'
import { FaCertificate, FaCircleCheck, FaHandshake, FaHighlighter, FaIdBadge, FaLightbulb, FaSchool, FaVectorSquare } from "react-icons/fa6"
import Image from "next/image"

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



    const data = [
        {
            title: 'Finex Healthcare Analytics and Informatics Consult, LLC Hawthorne, CA',
            position: 'GRC Analyst / Consultant',
            date: ' Mar 2022 - date'
        },
        {
            title: ' Polaris Bank Limited(formerly Skye Bank), Lagos, Nigeria',
            position: 'Head, Virtual Channels / Digital Business',
            date: 'Feb 2016 – April 2019',
        },
        {
            title: 'Utah State University',
            position: 'Graduate Research Assistant',
            date: 'Aug 2011 – May 2013',
        },
        {
            title: 'Skye Bank plc., Lagos, Nigeria',
            position: 'Head Pre- Paid Card / Operational Risk Analyst',
            date: 'Mar 2008 – Aug 2011',
        },
        {
            title: 'Access Bank plc. Lagos, Nigeria ',
            position: 'Head, Card Operations, Services and Management System',
            date: 'Sept 2006 – Feb 2008',
        },
    ]

    const roles = [
        {
            title: 'Policy Development',
            position: 'I spearheaded the creation and redesign of 20 internal governance policies to align with evolving legal and regulatory standards while ensuring 100 % compliance.',
        },
        {
            title: 'Risk Assessment',
            position: 'I conducted monthly risk control self-assessment (RCSA) across my organization departments and addressed 15 identified potential threats, thereby reducing the risk profile by 35%.',
        },
        {
            title: ' Compliance Training',
            position: ' I led and supervised a training session for 250 employees to ensure that they are properly educated on the latest compliance protocols and best practices ensuring 85% employee compliance rate post training',
        },
        {
            title: 'Audit Coordination',
            position: 'I superintended and managed over 20 internal and external audits, ensuring all aspects of the organization regulatory requirements are adhered to.',
        },
        {
            title: 'Incident Management',
            position: ' I oversaw the investigation and resolution of more than 60 compliance breaches and ensured that all incidents were handled promptly and efficiently.',
        },
        {
            title: 'Stakeholders Engagements ',
            position: ' I engaged 30 key stakeholders on a quarterly basis to communicate compliance issues and solutions to ensure a culture of transparency and accountability within the organization fostering 30% increase in compliance.',
        },
    ]


    const highlights = [
        {

            title: 'Project Management',
            position: 'Successful completion of retention projects, monitoring compliance and maintaining a 2.5 million client database.',
        },
        {

            title: 'UAT/ Testing Evaluation Management',
            position: ' Managed, process, perform high - resolution confirmatory testing of more than 10 electronic and digital payment platforms.',
        },
        {

            title: 'Multi-Site Management',
            position: ' Coordinated risk assessment and site activity at more than 8 locations and home health agencies.',
        },
        {
            title: 'Client Outreach/ Retention',
            position: ' Implemented an aggressive client outreach plan with training and mentoring of employees that resulted in an increase in client retention, exceeding goals by 25 % ',
        },
        {
            title: 'Training ',
            position: 'Provided guideline training to third party providers providing research protocol activities on behalf of regional office.',
        },
        {
            title: 'Leadership',
            position: 'Provided guidance for career growth to more than 20 regional heads and over 250 employees on risk assessment and mitigation.',
        },
    ]

    const mapData = data.map((data, index) => {
        return (
            <li className="d-flex gap-3" key={index}>
                <span>
                    <FaCircleCheck />
                </span>
                <div className="d-lg-flex justify-content-between w-100">
                    <div className="">
                        <p className="fw-bold">{data.title}</p>
                        <p>{data.position}</p>
                        <hr className="d-none d-lg-block" />
                    </div>
                    <div className="experience-date ms-auto">
                        <span>{data.date}</span>
                    </div>
                    <hr className="d-block d-lg-block" />
                </div>
            </li>
        )
    })
    const mapRoles = roles.map((data, index) => {
        return (
            <li className="d-flex gap-3" key={index}>
                <span>
                    <FaCircleCheck />
                </span>
                <div className="d-flex justify-content-between  w-100">
                    <div className="">
                        <p className="fw-bold">{data.title}</p>
                        <p>{data.position}</p>
                        <hr />
                    </div>
                    <div className="experience-date">
                        <span>{data.date}</span>
                    </div>
                </div>
            </li>
        )
    })
    const mapHighlights = highlights.map((data, index) => {
        return (
            <li className="d-flex gap-3" key={index}>
                <span>
                    <FaCircleCheck />
                </span>
                <div className="d-flex justify-content-between  w-100">
                    <div className="">
                        <p className="fw-bold">{data.title}</p>
                        <p>{data.position}</p>
                        <hr />
                    </div>
                    <div className="experience-date">
                        <span>{data.date}</span>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <section className="resume" id="resume">

            <div class="title">
                <h2>My Resume</h2>
            </div>
            <div className="container">
                <div className="resume-nav" id='navRefParent'>

                    <button className='navRef' data-target='experience'> <FaHandshake />
                        <span>Experience</span> <span className='fill active'></span></button>
                    <button className='navRef' data-target='qualification'><FaVectorSquare />
                        <span>Qualifications</span> <span className='fill'></span></button>
                    <button className='navRef' data-target='proficiency'><FaIdBadge />
                        <span>Technical Proficiency</span> <span className='fill'></span></button>
                    <button className='navRef' data-target='achievements'> <FaSchool />
                        <span>Achievements</span> <span className='fill'></span></button>

                    <button className='navRef' data-target='certifications'><FaCertificate />
                        <span>License & Certifications</span> <span className='fill'></span></button>
                    <button className='navRef' data-target='membership'>
                        <FaLightbulb />
                        <span>Membership & Affiliation</span> <span className='fill'></span>
                    </button>
                    <button className='navRef' data-target='highlights'>
                        <FaHighlighter />
                        <span>Professional Highlights</span> <span className='fill'></span>
                    </button>
                </div>


                <div id="resume-content" className='resume-content' >
                    <div class="content-item experience" id='experience'>
                        <div className="">
                            <ul className="">

                                {mapData}

                            </ul>
                        </div>

                    </div>
                    <div class="content-item qualification" id='qualification'>
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
                        <div className="mt-5">
                            <h4 className="fw-bold">Core Competencies</h4>
                            <div className="competence-tags">
                                <span>Elec. and Digital payment setup </span>
                                <span>Client Outreach/Management</span>
                                <span>Case Management</span>
                                <span>Training/Mentoring</span>
                                <span> Project Management/Coordination</span>
                                <span> Database Management</span>
                                <span>Client Relations/Service</span>
                                <span>Multi-Functional Team Leader</span>
                                <span>Scientific Presentations</span>
                            </div>
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

                    <div class="content-item" id='achievements'>
                        <div className="">
                            <ul>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>Successfully completed risk control self-assessment (RCSA) with Dun and Bradstreet at
                                        Skye Bank Sierra Leone.</p>
                                </li>

                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>I spearheaded and coordinated the team that implemented operations of Visa credit card
                                        issuance &amp; management system ensuring that Access became the first Nigerian Bank to
                                        issue Visa credit card (cash backed), while ensuring that the card operation is PCI DSS
                                        compliant.</p>
                                </li>

                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>I led the operational team that successful implemented and executed Visa international
                                        debit card program at Skye Bank plc., also ensuring that card operations are PCI DSS
                                        compliant</p>
                                </li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>Ensured that the prepaid card business became a strong source of revenue for the bank.
                                        Boosted mobile subscriptions from $75k to $900k, increasing revenue from $43m to over
                                        $500m within three years.</p>
                                </li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p>Achieved 75% customer retention rate, up from 25%.</p>
                                </li>
                                <li className="d-flex gap-3">
                                    <span>
                                        <FaCircleCheck />
                                    </span>
                                    <p> Maximized operational efficiency, increasing customer experience from 45% to 75%.</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="content-item certifications" id='certifications'>
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

                        <div className="highlights">
                            <h4 className="fw-bold">Professional Highlights</h4>
                            <div className="row row-cols-1 row-cols-lg-3 g-2">
                                <div className="col">
                                    <div className="">
                                        <p>Successful completion of retention projects, monitoring compliance and
                                            maintaining a 2.5 million client database.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <p>Managed, process, perform high-resolution
                                            confirmatory testing of more than 10 electronic and digital payment platforms.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <p>Coordinated risk assessment and site activity at more than 8 locations
                                            and home health agencies.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <p>Implemented an aggressive client outreach plan with training and
                                            mentoring of employees that resulted in an increase in client retention, exceeding goals by 25%</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <p>Provided guideline training to third party providers providing research protocol
                                            activities on behalf of regional office.</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <p>Provided guidance for career growth to more than 20 regional heads and over 250
                                            employees on risk assessment and mitigation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="content-item" id='membership'>
                        <div className="">
                            <div className="">
                                <h4 className="fw-bold">Membership</h4>
                                <p>A member of American Economic Association (AEA) and National Association of Business Economists (NABE)</p>
                            </div>

                            <div className=" mt-5">
                                <h4 className="fw-bold">Roles and Responsibilities</h4>
                                <ul>
                                    {mapRoles}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="content-item" id='highlights'>
                        <div className="">
                            <ul>
                                {mapHighlights}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}

export default Resume