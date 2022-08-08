import {Suspense} from 'react';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import { getAllPhotos, getAlbumPhotos } from '../../api';
import Pagination from '../Pagination';
import PhotoGrid from './PhotoGrid';
import { PAGE_LIMIT } from '../../constants';

const Photos = ({albumId}) => {
  let count, resource;
  if (albumId) {
    count = getAlbumPhotos(albumId, 1);
    resource = getAlbumPhotos(albumId, 1);
  } else {
    count = getAllPhotos(1);
    resource = getAllPhotos(1);
  }

  return (
    <>
      <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
        <GetPhotos count={count} resource={resource} albumId={albumId} />
      </Suspense>
    </> 
  )
}

const GetPhotos = ({resource, count, albumId}) => {
  const [resource2, setResource] = useState(resource);
  const [pageCount, setPageCount] = useState(0);
  const response = count.read();

  useEffect(() => {
    setPageCount(Math.ceil(response.totalCount / PAGE_LIMIT));
    // eslint-disable-next-line
  }, []);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    if(albumId)
      setResource(getAlbumPhotos(albumId, currentPage));
    else
      setResource(getAllPhotos(currentPage));
  }

  return (
    <>
      <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
        <RenderPhotos resource={resource2} />
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} /> 
      </Suspense>
    </> 
  )
}

const RenderPhotos = ({ resource }) => {
  const response = resource.read();
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
  const photosList = groupRowsByColNum(response.data, 6);

  return (
    <PhotoGrid photosList={photosList} />
  )  
}

export default Photos;