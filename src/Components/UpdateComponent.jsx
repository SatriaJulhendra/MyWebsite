import{Container, Row, Col} from 'react-bootstrap'
import maintenance from "../assets/Foto/maintenance.png"

function UpdateComponent() {
  return (
    <div className="update ">
      <Container>
        <Row>
          <Col className=" min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src={maintenance} alt="maintenance" />
            <p className="pt-5">The page is under maintenance</p>
          </Col>
        </Row>
      </Container>
    </div>  
  )
}

export default UpdateComponent