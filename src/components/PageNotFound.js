import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageNotFound() {
  return (
    <Container>
        <Row>
            <Col>
                <h3 style={{textAlign:"center"}}>Page Not Found</h3>
            </Col>
        </Row>
    </Container>
  )
}

export default PageNotFound