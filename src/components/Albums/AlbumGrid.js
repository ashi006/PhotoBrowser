import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AlbumThumbnail from './AlbumThumbnail';

const AlbumGrid = ({ albumsList }) => {
    return(
        <>
            {albumsList.map((row, index) => {
                return(
                    <Row key={index}>
                        {row.map((album, idx) => {
                            return(
                                <Col key={album.id} lg={2} md={4} sm={4} xs={6} style={{textAlign:"center", marginBottom: "20px"}}>
                                    <AlbumThumbnail album={album} />
                                </Col>
                            );
                        })}
                    </Row>
                ) 
            })} 
        </> 
    )
}

export default AlbumGrid