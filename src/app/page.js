import styles from "./page.scss";
import Navbar from "@/components/header/Navbar";
import Hero from "@/components/header/Hero";
import Image from 'next/image';
import Link from 'next/link'
import { FaChartColumn, FaHeartPulse, FaWhatsapp } from "react-icons/fa6";
import TextTitle from "@/components/text-title/TextTitle";
import { Yellowtail } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonial/Testimonial";
import Contact from "@/components/contact/Contact";
const yellowtail = Yellowtail({ subsets: ['latin'], weight: '400', display: 'swap' })

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Hero />

      {/* About us Section */}
      <section className="about" id="about-us" data-aos="fade-up">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="image">
                <div className="">
                  <Image src="/pics/about_1_3.png" className="about-us-image d-block m-auto" height={400} width={400} alt="" />
                </div>

              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                {/* <div className="d-flex align-items-center gap-4 my-3">

                  <Image src='/pics/about.png' height={70} width={70} alt="" />
                  <h2 className={`${yellowtail.className} fw-bold about-us`}>About Us</h2>
                </div> */}
                <h3 className="fs-1 fw-bold" data-aos="fade-up">Finex Healthcare Analytics and Informatics LLC</h3>
                <p data-aos="fade-up">Finex Healthcare Analytics and Informatics Consult LLC is a firm that focuses on the analysis of big and difficult health data. Our aim is to enhance and increase the efficacy of the process of healthcare delivery, liaising with healthcare providers and patients in managing cost of care delivery etc. The primary focus is using patient historical data and findings to make intelligent and informed decisions. The end product is to apply various visualization tools to support our services and results. </p>
                <div>
                  {/* <h3>About Us</h3> */}
                  <h2 className={`${yellowtail.className} fw-bold about-uss`} data-aos="fade-up">About Us</h2>
                  <p data-aos="fade-up">We are a new and developing wellness, market research, strategy and consulting company with knowledge to build the skills required to navigate growing level of healthcare data. We liaise with healthcare facilities to solve their staffing needs. Here are some of the benefits of our healthcare analysis:</p>
                </div>
                <div className="d-sm-flex d-block gap-5">

                  <ul data-aos="fade-up">
                    <li><span className="me-1"><FaHeartPulse /></span>Patience satisfaction</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Staff Optimization</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Data Management</li>
                  </ul>
                  <ul data-aos="fade-up">
                    <li><span className="me-1"><FaHeartPulse /></span>Costcare and Management</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Quality Staff</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Client Specialization</li>
                  </ul>

                </div>


              </div>
            </div>
          </div>
        </div>

        <section className="container py-5 data-driven" data-aos="zoom-in">
          <div className="col-12 col-md-8 mx-auto fst-italic">
            <h2 className="text-center">The Future Is Data Driven</h2>
            <p className="text-center" >
              <span className="quote-up   d-none d-md-block"><Image src="/pics/quote.png" className="" height={40} width={40} alt="" /></span>
              <span className="quote-down d-none d-md-block"><Image src="/pics/quote.png" className="" height={40} width={40} alt="" /></span>

              At Finex Healthcare Analytics and Informatics, we believe in seamless turning data to action. We engage, find, analyze, and interpret patient current and historic data using digital technologies. We gather, examine patient environment, and predict, visualize possible outcomes that affects them.
            </p>
          </div>
        </section>
      </section>

      {/* Our Services */}
      <section className="services" id="services">
        <div className="container  py-5 my-5">
          <h1 className={`${yellowtail.className} fw-bold title-color text-center`} data-aos="zoom-in">Finex Services</h1>
          <div className="row g-3 mt-4">
            <div className="col-12 col-md-3" data-aos="fade-down">
              <div className="bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">
                <Image src="/pics/chart4.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 fw-bold text-center">Patient Care Analytics</h3>
                {/* <p>We partner and support healthcare facilities and organizations to deliver better quality care to client's residents. Through careful analysis, we can identify areas for improvement, enhance patient outcomes, and optimize resource utilization. </p> */}
                <p>We partner and support healthcare facilities and organizations to deliver better quality care to client's residents.</p>
                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}
              </div>
            </div>

            <div className="col-12 col-md-3" data-aos="fade-up">
              <div className=" bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">

                <Image src="/pics/trained.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center fw-bold">Healthcare Staffing and Planning</h3>
                <p>We recruit qualified and licensed healthcare professionals for our clients. These professionals are qualified by virtue of their education, training, licensure/regulation and perform professional service within their scope of practice.</p>
                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>
            <div className="col-12 col-md-3" data-aos="fade-up">
              <div className="bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">

                <Image src="/pics/visualization.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center fw-bold">Visualization of Health Data</h3>
                <p>Healthcare data visualization is the transformation of patients/residents raw data into visuals though the use of simple graphic, such as tables, charts, plots, dashboards, info graphics.<br /><br /> It displays information, communicate difficult data connections and data-driven insights in a manner that is easy to understand. We also apply simple statistical analysis to draw conclusion.</p>
                {/* <p>We use analytical and visualization tools to analyze patients raw data generated from various sources, represent them using visual graphics like charts, plots, dashboard, infographics and tables, then draw conclusions based on statistics. </p> */}
                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>
            <div className="col-12 col-md-3" data-aos="fade-down">
              <div className="bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">

                <Image src="/pics/sports.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center fw-bold">Sports Promotion and Engagement</h3>
                <p>We encourage physical exercises and wellness through active participation and promotion of sporting activities. We optimise and utilize different tools, strategies and resources to promote a product that will generate additional demand. <br /><br /> To achieve this, we identify our potential customers, decide on promotion budget, and select the product to promote. We also identify, partner and affilate with non-governmental organization(NGO) to sponsor and facilitate sporting engagements to enable the general public derive maximum benefits. </p>
                {/* <p>At Finex, we are uniquely positioned to also engage our patients in sports activities and also enhance their overall fitness in sports experience. We employ personalized strategies to tailor personalized services to the specific interests of our clients.</p> */}
                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>



          </div>
        </div>



        <section className="container py-5 data-driven" data-aos="zoom-in">
          <div className="col-12 col-md-8 mx-auto fst-italic">
            <h2 className="text-center">Start Of Business Operation</h2>
            <p className="text-center">
              <span className="quote-up   d-none d-md-block"><Image src="/pics/quote.png" className="" height={40} width={40} alt="" /></span>
              <span className="quote-down d-none d-md-block"><Image src="/pics/quote.png" className="" height={40} width={40} alt="" /></span>
              Finex Healthcare Analytics was formed and owned by a seasoned social change engineer Chris Anazia in March 2022. He holds a B.sc degree in Mathematics, Economics and M.sc degree in Applied Economics. He is currently pursuing a Ph.D. degree in Public Health. He is passionate about health economics and public health and how to apply digital technology to improve healthcare delivery worldwide.
              The business was approved by the office of the Secretary of State of California on March 17th, 2022.
            </p>
          </div>
        </section>
      </section>



      {/* Why Choose Us */}
      <section className="choose-us">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-xl-6">
              <div className="">
                <div className="title-area mb-4" data-aos="fade-up">
                  <h2 className={`${yellowtail.className} fw-bold title-color  `}>Why Choose Finex?</h2>

                  <h2 className="fw-bold">Here Is How We Improve Patients Healthcare Analysis</h2>
                </div>
                <div className="choose-feature-wrap">
                  <div className="choose-features d-flex gap-4 " data-aos="fade-up">
                    <div className="">
                      <div className="box-number">
                        <Image src='/pics/7319389.png' width={40} height={40} alt="" />
                      </div>
                    </div>
                    <div className="media-body">
                      <h3 className="fw-bold">Support</h3>
                      <p>We relate with clients to support their organizational daily needs and goals.</p>
                    </div>
                  </div>
                  <div className="choose-features d-flex gap-4 " data-aos="fade-up">
                    <div className="">
                      <div className="box-number">
                        <Image src='/pics/chart6.png' width={40} height={40} alt="" />

                      </div>
                    </div>
                    <div className="media-body">
                      <h3 className="fw-bold">Analyse</h3>
                      <p>We interpret and transform complex data, and create visualization for ease of understanding.</p>
                    </div>
                  </div>
                  <div className="choose-features d-flex gap-4 " data-aos="fade-up">
                    <div className="">
                      <div className="box-number">
                        <Image src='/pics/4435682.png' width={35} height={40} alt="" />

                      </div>
                    </div>
                    <div className="media-body-non">
                      <h3 className="fw-bold"> Access</h3>
                      <p>We create access to client's system and make data driven decisions using clients historical and current data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="" data-aos="zoom-in">
                <Image src='/pics/why_1.jpg' className='why-us-img rounded-4 m-auto d-block' height={550} width={550} alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container  my-0">
          <div className="row g-5 align-items-center py-5">
            <div className="col-12 col-md-6">
              <div className="" data-aos="fade-up">
                <div className="accordion" id="accordionExample">
                  <div className="d-flex gap-1 align-items-center my-3">
                    <Image src='/pics/think.png' height={50} width={50} alt="" />

                    <h3 className={`fw-bold text-white`}>Frequently Asked Questions</h3>
                  </div>

                  <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How Do We Collect Data?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        We impolore various approaches in collecting patients data for analysis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How Long Does The Process Take?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        The duration of the process varies due to the requirements necessary for the analysis.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Must I Be There Physically?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        It depends on the type of analytics, while some require physical presence, others dont.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="">
                <Image src='/pics/2147767270-removebg-preview.png' className="faq_image d-block m-auto" height={400} width={400} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="process">
        <div className="container my-5 ">
          <h2 className={`${yellowtail.className} fw-bold title-color text-center `} data-aos="fade-up">Finex Work Process</h2>

          <h3 className="text-center display-6  fw-bold" data-aos="fade-up">Lets see how we work</h3>
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">01</span>

                <div className="image">
                  <Image src='/pics/process_card_1.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Patient Registration</p>
                {/* <p>The first step in our process is to welcome our patients and ensure they have a experience.</p> */}
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">02</span>

                <div className="image">
                  <Image src='/pics/process_card_2.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Assessment</p>
                {/* <p>The first step in our process is to welcome our patients and ensure they have a experience.</p> */}
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">03</span>

                <div className="image">
                  <Image src='/pics/process_card_3.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Identification</p>
                {/* <p>The first step in our process is to welcome our patients and ensure they have a experience.</p> */}
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">04</span>

                <div className="image">
                  <Image src='/pics/process_card_4.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Solution</p>
                {/* <p>The first step in our process is to welcome our patients and ensure they have a experience.</p> */}
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">05</span>

                <div className="image">
                  <Image src='/pics/process_card_4.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Evaluation</p>
                {/* <p>The first step in our process is to welcome our patients and ensure they have a experience.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team" id="team" data-aos="zoom-in">
        <div className="container ">
          <div className="team-heading text-center">
            <h3 className={`${yellowtail.className} fs-2 fw-bold`}>Our Team</h3>
            <h2 className="fw-bold ">Meet Finex professional Team</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3 position-relative">
              <div className="text-center team-card bg-white rounded-4 p-3">
                <Image src='/pics/4086652.png' alt="" width={100} height={100} className="rounded-pill" />
                <p>Mr. Chris Anazia</p>
                <p>Founder/Manager</p>
              </div>

            </div>
            {/* <div className="col-md-3 ">
              <div className="text-center team-card bg-white rounded-4 p-3">
                <Image src='/pics/9967199.png' alt="" width={100} height={100} className="rounded-pill" />
                <p>Mr. Thomson Mary</p>
                <p>Doctor</p>
              </div>

            </div> */}
            {/* <div className="col-md-3 ">
              <div className="text-center team-card bg-white rounded-4 p-3">
                <Image src='/pics/4086652.png' alt="" width={100} height={100} className="rounded-pill" />
                <p>Mr. Thomson Mary</p>
                <p>Doctor</p>
              </div>

            </div> */}
            {/* <div className="col-md-3 ">
              <div className="text-center team-card bg-white rounded-4 p-3">
                <Image src='/pics/11696670.png' alt="" width={100} height={100} className="rounded-pill" />
                <p>Mr. Thomson Mary</p>
                <p>Doctor</p>
              </div>

            </div> */}
          </div>
        </div>
      </section>


      {/* get in touch */}
      <section className="contact-us" id="contact" data-aos="fade-up">
        <Contact />
      </section>

      <Testimonial />
      <Footer />
    </main>
  );
}
