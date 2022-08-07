import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoThumbnail from './PhotoThumbnail';
import { getAllPhotos } from '../api';
import Pagination from './Pagination';

const resource = getAllPhotos();

const Photos = () => {
  // const [photosList, setPhotos] = useState([]);
  const groupRowsByColNum = (data, colPerRow) => {
    const rows = [];
    let cols = [];
    for (let i = 0; i < data.length; i++) {
      cols.push(data[i]);
      if ((i + 1) % (colPerRow) === 0) {
        rows.push(cols);
        cols = [];
      }
    }
    if (cols && cols.length > 0) {
      rows.push(cols);
    }
    return rows;
  };

  const photos = resource.read();
  const photosList = groupRowsByColNum(photos, 6);
  // setPhotos(groupRowsByColNum(photos, 6));

  // useEffect(() => {
  //   const getPhotos = async () => {
  //     const photosList = await fetchData();
  //     console.log(photosList);
  //     console.log(groupRowsByColNum(photosList, 6));
  //     setPhotos(groupRowsByColNum(photosList, 6));
  //   }
  //   getPhotos();
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch(Constants.PHOTOS_API_URL);
  //   // const res = await fetch(`${Constants.PHOTOS_API_URL}?_limit=20`);
  //   const data = await res.json();
  //   return data;
  // }

  return (
    <>
      {photosList.map((row, index) => {
        return(
          <Row key={index}>
            {row.map((photo, idx) => {
              return(
                <Col key={photo.id} lg={2} md={4} sm={4} xs={6} style={{marginBottom: "20px"}}>
                  <PhotoThumbnail photo={photo} />
                </Col>
              );
            })}
          </Row>
        );
      })}  
      <Pagination /> 
    </> 
  )
}

export default Photos;