import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoThumbnail from './PhotoThumbnail';

const PhotoGrid = ({ photosList }) => {
    return(
        <>
          {photosList.map((row, index) => {
            return(
                <Row key={index}>
                    {row.map((photo, idx) => {
                        return(
                            <Col key={photo.id} lg={2} md={4} sm={4} xs={6} style={{textAlign:"center", marginBottom: "20px"}}>
                                <PhotoThumbnail photo={photo} />
                            </Col>
                        );
                    })}
                </Row>
            ) 
          })} 
        </> 
    )
}

export default PhotoGrid
