import {Suspense} from 'react';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import { getAllAlbums, getUserAlbums } from '../../api';
import Pagination from '../Pagination';
import AlbumGrid from './AlbumGrid';
import { PAGE_LIMIT } from '../../constants';

const Albums = ({userId}) => {
  let count, resource;
  if (userId) {
    count = getUserAlbums(userId, 1);
    resource = getUserAlbums(userId, 1);
  } else {
    count = getAllAlbums(1);
    resource = getAllAlbums(1);
  }

  return (
    <>
      <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
        <GetAlbums count={count} resource={resource} userId={userId} />
      </Suspense>
    </> 
  )
}

const GetAlbums = ({resource, count, userId}) => {
  const [resource2, setResource] = useState(resource);
  const [pageCount, setPageCount] = useState(0);
  const response = count.read();

  useEffect(() => {
    setPageCount(Math.ceil(response.totalCount / PAGE_LIMIT));
    // eslint-disable-next-line
  }, []);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    if(userId)
      setResource(getUserAlbums(userId, currentPage));
    else
      setResource(getAllAlbums(currentPage));
  }

  return (
    <>
      <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
        <RenderAlbums resource={resource2} />
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} /> 
      </Suspense>
    </> 
  )
}
  
const RenderAlbums = ({ resource }) => {
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
  const albumsList = groupRowsByColNum(response.data, 6);

  return (
    <AlbumGrid albumsList={albumsList} />
  )  
}
export default Albums;