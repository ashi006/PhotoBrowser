import {Suspense} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import UserIcon from '../../images/user-icon-2.jpg';
import Photos from '../Photos/Photos';
import { useParams } from 'react-router-dom';
import UserInfo from '../Common/UserInfo';
import { getAlbumDetails, getUserDetails } from '../../api';

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
              <Col lg={2} sm={6}>
                  <img className="single-user-pic" src={UserIcon} alt="" />
              </Col>
              <UserInfo userDetails={userDetails} />
            </Row>
            <Row>
                <h4 style={{backgroundColor:"#e8e7e7", padding:"5px 10px", margin:"20px 0", color:"#5161ce"}}>Photos</h4>
                <Photos albumId={albumId} />
            </Row>
        </>
    );
}

export default SingleAlbum;