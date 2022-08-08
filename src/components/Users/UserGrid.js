import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserThumbnail from './UserThumbnail';

const UserGrid = ({ usersList }) => {
    return(
        <>
            {usersList.map((row, index) => {
                return(
                    <Row key={index}>
                        {row.map((user) => {
                            return(
                                <Col key={user.id} lg={2} md={4} sm={4} xs={6} style={{textAlign:"center", marginBottom: "20px"}}>
                                    <UserThumbnail user={user} />
                                </Col>
                            );
                        })}
                    </Row>
                ) 
            })} 
        </> 
    )
}

export default UserGrid