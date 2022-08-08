import {Suspense} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import { useParams } from "react-router-dom";
import { getPhotoDetails, getAlbumDetails, getUserDetails } from '../../api';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaMapMarker } from "react-icons/fa";

const SinglePhoto = () => {
  const { id } = useParams();
  const photoObj = getPhotoDetails(id);

  return ( 
    <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
      <PhotoDetail resource={photoObj} />
    </Suspense>
  )
}

const PhotoDetail = ({resource}) => {
  const response = resource.read();
  const photoDetails = response.data;
  const albumObj = getAlbumDetails(photoDetails.albumId);

  return (
    <Row>
      <Col lg={6}>
        <a href="https://www.w3schools.com/css/img_5terre.jpg" target="_blank" rel="noreferrer"><img src="https://www.w3schools.com/css/img_5terre.jpg" alt="" /></a>
        {/* <a href={photoDetail.url} target="_blank"><img src={photoDetail.thumbnailUrl} alt="" /></a> */}
      </Col>
      <Col lg={6}>
        <h1>{photoDetails.title}</h1>
        <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
          <AlbumDetail resource={albumObj} />
        </Suspense>
      </Col>
    </Row>
  )
}

const AlbumDetail = ({resource}) => {
  const response = resource.read();
  const albumDetails = response.data;
  const userObj = getUserDetails(albumDetails.userId);

  return (
    <>
      <h4 className="single-photo-heading">Album</h4>
      <p>{albumDetails.title}</p>
      <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
        <UserDetail resource={userObj} />
      </Suspense>
    </>
  )
}


const UserDetail = ({resource}) => {
  const response = resource.read();
  const userDetails = response.data;

  return (
    <>
      <h4 className="single-photo-heading">Uploaded by</h4>
      <ul style={{listStyle: "none", padding:0}}>
        <li><FaUser /> &nbsp;{userDetails.name} ({userDetails.username})</li>
        <li><FaEnvelope /> &nbsp;{userDetails.email}</li>
        <li><FaPhone /> &nbsp;{userDetails.phone}</li>
        <li><FaGlobe /> &nbsp;<a href={userDetails.website} target="_blank" rel="noreferrer">{userDetails.website}</a></li>
        <li><FaMapMarker/> &nbsp;{userDetails.address.suite}, {userDetails.address.street}, {userDetails.address.city}</li>
      </ul>
    </>
  )
}

export default SinglePhoto