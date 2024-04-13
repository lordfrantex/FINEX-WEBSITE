import styles from "./page.scss";
import Navbar from "@/components/header/Navbar";
import Hero from "@/components/header/Hero";
import Image from 'next/image';

import { FaChartColumn, FaHeartPulse } from "react-icons/fa6";
import TextTitle from "@/components/text-title/TextTitle";
import { Yellowtail } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonial/Testimonial";
const yellowtail = Yellowtail({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Hero />
      {/* About us Section */}
      <section className="about">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="image">
                <div className="">
                  <Image src="/pics/about_1_3.png" className="about-us-image d-block m-auto" height={400} width={400} alt="" />


                </div>
                {/* <div className="about-info">
                  <h3>Dr. Peter Johnson</h3>
                  <p>Proficinet in delievery</p>
                </div> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="">
                <div className="d-flex align-items-center gap-4 my-3">

                  <Image src='/pics/about.png' height={70} width={70} alt="" />
                  {/* <TextTitle text='About Us' /> */}
                  <h2 className={`${yellowtail.className} fw-bold about-us`}>About Us</h2>
                </div>
                <h3 className="fs-1 fw-bold">Finex Health Care Services and Solution</h3>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos optio quod dolorem illum porro laudantium aspernatur facilis iure, architecto molestias, sequi quia neque nihil laboriosam natus omnis nostrum, labore alias. Our core values include:</p>
                <div className="d-sm-flex d-block gap-5">

                  <ul>
                    <li><span className="me-1"><FaHeartPulse /></span>Professionalism</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Customer First Approach</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Pocket Friendly</li>
                  </ul>
                  <ul>
                    <li><span className="me-1"><FaHeartPulse /></span>Consultancy</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Quality Staff</li>
                    <li><span className="me-1"><FaHeartPulse /></span>Client Specialization</li>
                  </ul>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Services */}
      <section className="services">
        <div className="container  py-5 my-5">
          <h2 className={`${yellowtail.className} fw-bold title-color text-center`}>Our Services</h2>
          <h2 className="text-center fs-1">Our Finex Specialties Technical Service</h2>
          <div className="row g-3 mt-4">
            <div className="col-12 col-md-3 ">
              <div className="bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">
                <Image src="/pics/chart4.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center">Patient Care Analytics</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex velit nihil necessitatibus natus laudantium rem voluptates? Minima minus, quo voluptatem ipsa vitae voluptate nobis quibusdam, quidem perspiciatis suscipit quisquam doloremque.</p>
                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>

            <div className="col-12 col-md-3  ">
              <div className=" bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">

                <Image src="/pics/trained.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center">Healthcare Staffing and Planning</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex velit nihil necessitatibus natus laudantium rem voluptates? Minima minus, quo voluptatem ipsa vitae voluptate nobis quibusdam, quidem perspiciatis suscipit quisquam doloremque.</p>

                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>
            <div className="col-12 col-md-3  ">
              <div className="bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">

                <Image src="/pics/visualization.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center">Visualization of Health Data</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex velit nihil necessitatibus natus laudantium rem voluptates? Minima minus, quo voluptatem ipsa vitae voluptate nobis quibusdam, quidem perspiciatis suscipit quisquam doloremque.</p>

                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>
            <div className="col-12 col-md-3 ">
              <div className="bg-white service-item d-flex flex-column justify-content-center p-3 gap-3 rounded-5 align-items-center">

                <Image src="/pics/sports.png" height={70} width={70} alt="" />

                <h3 className="m-0 fs-4 text-center">Sports Promotion and Engagement</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex velit nihil necessitatibus natus laudantium rem voluptates? Minima minus, quo voluptatem ipsa vitae voluptate nobis quibusdam, quidem perspiciatis suscipit quisquam doloremque.</p>

                {/* <button className="m-0 btn border rounded-pill">Read More</button> */}

              </div>
            </div>



          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="choose-us">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-xl-6">
              <div className="">
                <div className="title-area">
                  <h2 className={`${yellowtail.className} fw-bold title-color  `}>Why Choose Us?</h2>

                  <h2 className="fw-bold">We Are Always Open For Your Services</h2>
                </div>
                <div className="choose-feature-wrap">
                  <div className="choose-features d-flex gap-4 ">
                    <div className="">
                      <div className="box-number">01</div>
                    </div>
                    <div className="media-body">
                      <h3>Compassionate Staff</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique corporis delectus, debitis illum consectetur sapiente vel mollitia veniam aperiam.</p>
                    </div>
                  </div>
                  <div className="choose-features d-flex gap-4 ">
                    <div className="">
                      <div className="box-number">01</div>
                    </div>
                    <div className="media-body">
                      <h3>Compassionate Staff</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique corporis delectus, debitis illum consectetur sapiente vel mollitia veniam aperiam.</p>
                    </div>
                  </div>
                  <div className="choose-features d-flex gap-4 ">
                    <div className="">
                      <div className="box-number">01</div>
                    </div>
                    <div className="media-body-non">
                      <h3>Compassionate Staff</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique corporis delectus, debitis illum consectetur sapiente vel mollitia veniam aperiam.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="">
                <Image src='/pics/why_1.jpg' className='rounded-4 m-auto d-block' height={550} width={550} alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="process">
        <div className="container  my-0">
          <div className="row g-5 align-items-center py-5">
            <div className="col-12 col-md-6">
              <div className="">
                <div class="accordion" id="accordionExample">
                  <div className="d-flex gap-1 align-items-center my-3">
                    <Image src='/pics/think.png' height={50} width={50} alt="" />

                    <h3 className={`fw-bold text-white`}>Frequently Asked Questions</h3>
                  </div>

                  <div class="accordion-item ">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="">
                <Image src='/pics/nurse.png' height={600} width={500} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="processs">
        <div className="container my-5 ">
          <h2 className={`${yellowtail.className} fw-bold title-color text-center `}>Work Process</h2>

          <h3 className="text-center display-6  fw-bold">Lets see how we work</h3>
          <div className="row">
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">01</span>

                <div className="image">
                  <Image src='/pics/process_card_1.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Patient Registration</p>
                <p>The first step in our process is to welcome our patients and ensure they have a experience.</p>
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">02</span>

                <div className="image">
                  <Image src='/pics/process_card_2.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Patient Registration</p>
                <p>The first step in our process is to welcome our patients and ensure they have a experience.</p>
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">03</span>

                <div className="image">
                  <Image src='/pics/process_card_3.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Patient Registration</p>
                <p>The first step in our process is to welcome our patients and ensure they have a experience.</p>
              </div>
            </div>
            <div className="col-lg-3 col-12 my-3">
              <div className=" p-3 text-center rounded-3 process-label">
                <span className="label-1">04</span>

                <div className="image">
                  <Image src='/pics/process_card_4.jpg' alt="" width={150} height={150} className="rounded-pill" />
                </div>
                <p className="fs-5 fw-bold">Patient Registration</p>
                <p>The first step in our process is to welcome our patients and ensure they have a experience.</p>
              </div>
            </div>



          </div>
        </div>
      </section>
      <Testimonial />
      <Footer />

    </main>
  );
}
