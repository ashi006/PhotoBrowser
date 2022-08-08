import {Suspense} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import UserIcon from '../../images/user-icon-2.jpg';
import Albums from '../Albums/Albums';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../api';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaMapMarker } from 'react-icons/fa';

const SingleUser = () => {
    const { id } = useParams();
    const userObj = getUserDetails(id);

  return (
    <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
      <UserDetail resource={userObj} />
    </Suspense>
  );
}

const UserDetail = ({resource}) => {
    const response = resource.read();
    const userDetails = response.data;
    return (
        <>
            <Row style={{backgroundColor: "#fff"}}>
            <Col lg={2}><img src={UserIcon} alt="" style={{width: "100%"}} /></Col>
            <Col lg={10}>
                <Row>
                    <Col lg={3}>
                        <ul className="single-user-detail">
                            <li><FaUser /> &nbsp;{userDetails.name} ({userDetails.username})</li>
                            <li><FaEnvelope /> &nbsp;{userDetails.email}</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul className="single-user-detail">
                            <li><FaPhone /> &nbsp;{userDetails.phone}</li>
                            <li><FaGlobe /> &nbsp;<a href={userDetails.website} target="_blank" rel="noreferrer">{userDetails.website}</a></li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <ul className="single-user-detail">
                            <li><FaMapMarker/> &nbsp;{userDetails.address.suite}, {userDetails.address.street}, {userDetails.address.city}</li>
                            <li><FaMapMarker/> &nbsp;{userDetails.company.name}</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            </Row>
            <Row>
                <h4 style={{backgroundColor:"#e8e7e7", padding:"5px 10px", margin:"20px 0", color:"#5161ce"}}>Albums</h4>
                <Albums userId={userDetails.id} />
            </Row>
        </>
    );
}

export default SingleUser