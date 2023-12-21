import React from 'react'

import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const FooterComponent = () => {
    return (
        <div className="footer py-5 ">
            <Container>
                <Row className=" d-flex justify-content-between align-items-center align-items-md-start" >
                    <Col className="col-lg-5 col-md-6 col-12">
                        <h3 className="fw-bold pt-3">Satria Julhendra.</h3>
                        <p className="desc">Informatics Engineering Student At Riau University And Full Stack Web Developer</p>
                        <div className="mail">
                            <Link  className=" text-decoration-none d-flex gap-3 align-items-center">
                                <i className=" fa-regular fa-envelope"></i>
                                <p className="m-0">Satria.julhendra07@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className=" d-flex flex-column col-lg-2 col-md-6 col-12 align-items-center align-items-md-start ">
                        <h5 className=" fw-bold mb-3 pt-3 ">Menu</h5>

                        <Link to="/">Home</Link>
                        <Link to="project">Project</Link>
                        <Link to="sertifikat">Sertifikat</Link>
                        <Link to="blog">Blog</Link>
                        <Link to="https://drive.google.com/uc?export=download&id=1at7y4Ll5-ISs0H3Yq1lMjVwKynUjTkWs">CV</Link>
                        
                    </Col>
                    <Col className="col-lg-5 col-md-6 col-12 d-flex align-items-center justify-content-center pt-3" >
                        <div dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127669.04951187345!2d101.35877400415416!3d0.5139623325296621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab80690ee7b1%3A0x94dde92c3823dbe4!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1703184215573!5m2!1sid!2sid" width="350" height="200 " style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
                    </Col>
                </Row>
                <Row className='Copyright'>
                    <Col >
                    <div className="icon d-flex justify-content-center mb-3">
                        <div className="icon-warp d-flex justify-content-center align-items-center mx-1 ">
                        <a href="https://www.linkedin.com/in/satria-julhendra/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <div className="icon-warp d-flex justify-content-center align-items-center mx-1 ">
                        <a href="https://www.instagram.com/satriajulhendra/"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        
                        <div className="icon-warp d-flex justify-content-center align-items-center mx-1 ">
                        <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                        <div className="icon-warp d-flex justify-content-center align-items-center mx-1 ">
                        <a href=""><i className="fa-brands fa-telegram"></i></a>
                        </div>
                        <div className="icon-warp d-flex justify-content-center align-items-center mx-1 ">
                        <a href="https://github.com/SatriaJulhendra"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                        <p className=" text-center px-md-0 px-3 mb-0">&copy; Copyright {new Date().getFullYear()} by <span className=" fw-bold">Satria Julhendra</span>, All Right Reserved </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent