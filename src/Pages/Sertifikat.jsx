import { Container, Row, Col} from 'react-bootstrap'
import {sertifikat} from '../data/index'

function Sertifikat() {
  return (
    <div className="sertifikat-page">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-bold  animate__animated animate__fadeInUp ">Project</h1>
            <p className="text-center  animate__animated animate__fadeInUp ">Below are some of the projects I have made</p>
          </Col>
        </Row>
        <Row>
        {sertifikat.map((sertifikat) => {
              return(
                <Col lg="4" className="mb-4" data-aos="fade-up" data-aos-duration= "1000" >
                  <div className="project-warp shadow rounded">
                    <img src={sertifikat.img} alt={sertifikat.name} className="w-100 rounded-top" />
                    <div className="project-ket p-3">
                      <h5 className=" mb-4 px-3 text-center">{sertifikat.name}</h5>
                      <div className="btn-warp d-flex justify-content-center align-items-center">
                        <a href={sertifikat.link} target="_blank" className="btn btn-outline-primary rounded-2 ">View Sertifikat</a>
                      </div>
                    </div>
                  </div>
                </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default Sertifikat