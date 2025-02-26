import { Container, Row, Col} from 'react-bootstrap'
import {projects, sertifikat, skills} from '../data/index'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroImage from "../assets/Foto/hero.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


function HomePage() {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100  d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box  d-flex align-items-center ">
            <Col lg="6" >
                <h5 className=" m-0 fw-bold animate__animated animate__fadeInUp animate__delay-1s">Hi There,</h5>
                <h1 className="mb-4 fw-bold animate__animated animate__fadeInUp animate__delay-1s">I'm, Satria Julhendra</h1>
                <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Informatics Engineering Student at Riau University and Full Stack Web Developer</p>
                <button className="btn btn-outline-primary btn-lg rounded-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Contact Me</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 d-flex justify-content-center">
                <div className="img-warp d-flex justify-content-center align-items-center mt-4 mt-md-0 animate__animated animate__fadeInUp">
                  <img src={HeroImage} alt="Hero" />
                </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="aboutme w-100 ">
        <Container className="">
          <h2 className="fw-bold text-center mb-4" data-aos="fade-up" data-aos-duration= "1000" >About Me</h2>
          <p className="text-center" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay = "200" >Satria Julhendra, a third year Informatics Engineering student, is known as a responsible individual and able to manage time efficiently. His strong experience in website development involves HTML, CSS, JavaScript, React JS, Bootstrap, and Firebase. Satria, who has a high enthusiasm for learning, is always ready to collaborate in creating innovative solutions for website development. The combination of technical skills and time management abilities makes him ready to contribute effectively</p>
        </Container>
      </div>

      <div className="skills">
        <Container>
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up" data-aos-duration= "1000" >Hard Skills</h2>
          <div className="skills-warp d-flex justify-content-center align-items-center flex-wrap gap-4 " data-aos="fade-up" data-aos-duration= "1000" data-aos-delay = "200">
            {skills.map ((skill) => {
              return(
                <img src={skill.img} alt={skill.name} />
              )
            })}
          </div>
        </Container>
      </div>

      <div className="project">
        <Container>
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up" data-aos-duration= "1000" >Project</h2>
          <Row>
            {projects.map((project) => {
              return(
                <Col lg="4" className="mb-4" data-aos="fade-up" data-aos-duration= "1000" data-aos-delay = {project.delay}>
                  <div className="project-warp shadow rounded">
                    <img src={project.img} alt={project.name} className="w-100 rounded-top" />
                    <div className="project-ket p-3">
                      <h5 className=" mb-4 px-3 text-center">{project.name}</h5>
                      <div className="btn-warp d-flex justify-content-center align-items-center">
                        <a href={project.link} target="_blank" className="btn btn-outline-primary rounded-2 ">View Project</a>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="sertifikat">
        <Container>
          <h2 className="fw-bold text-center mb-5" data-aos="fade-up" data-aos-duration= "1000" >Sertifikat</h2>
          <Row>
          <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true,}}
                breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
              {sertifikat.map((sertif) => {
                return(
                  <SwiperSlide>
                    <div className="sertifikat-warp shadow rounded p-2">
                      <img src={sertif.img} alt={sertif.name} className="w-100 rounded-top" />
                      
                    </div>
                  </SwiperSlide>
                )
              })}
                
                
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage