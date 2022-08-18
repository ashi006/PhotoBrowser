import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaMapMarker, FaBuilding } from 'react-icons/fa';

const UserInfo = ({userDetails}) => {
  return (
    <Col lg={10} sm={6}>
      <Row>
          <Col lg={6}>
              <ul className="single-user-detail">
                  <li><FaUser /> &nbsp;{userDetails.name} ({userDetails.username})</li>
                  <li><FaEnvelope /> &nbsp;{userDetails.email}</li>
                  <li><FaPhone /> &nbsp;{userDetails.phone}</li>
              </ul>
          </Col>
          <Col lg={6}>
              <ul className="single-user-detail">
                  <li><FaGlobe /> &nbsp;<a href={userDetails.website} target="_blank" rel="noreferrer">{userDetails.website}</a></li>
                  <li><FaBuilding/> &nbsp;{userDetails.company.name}</li>
                  <li><FaMapMarker/> &nbsp;{userDetails.address.suite}, {userDetails.address.street}, {userDetails.address.city}</li>
              </ul>
          </Col>
      </Row>
    </Col>
  )
}
export default UserInfo;