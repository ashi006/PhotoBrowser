import {Suspense} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import UserIcon from '../../images/user-icon-2.jpg';
import Photos from '../Photos/Photos';
import { useParams } from 'react-router-dom';
import { getAlbumDetails, getUserDetails } from '../../api';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaMapMarker } from 'react-icons/fa';

const SingleAlbum = () => {
    const { id } = useParams();
    const albumObj = getAlbumDetails(id);

  return (
    <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
      <AlbumDetail resource={albumObj} />
    </Suspense>
  );
}

const AlbumDetail = ({resource}) => {
    const response = resource.read();
    const albumDetails = response.data;
    const userObj = getUserDetails(albumDetails.userId);

    return (
        <>
            <Row><h4 style={{textAlign:"center"}}>{albumDetails.title}</h4></Row>
            <Row><h4 style={{backgroundColor:"#e8e7e7", padding:"5px 10px", margin:"20px 0", color:"#5161ce"}}>User Details</h4></Row>
            <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
                <UserDetail resource={userObj} albumId={albumDetails.id} />
            </Suspense>
        </>   
    )
}

const UserDetail = ({resource, albumId}) => {
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
                <h4 style={{backgroundColor:"#e8e7e7", padding:"5px 10px", margin:"20px 0", color:"#5161ce"}}>Photos</h4>
                <Photos albumId={albumId} />
            </Row>
        </>
    );
}

export default SingleAlbum;