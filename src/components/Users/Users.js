import {Suspense} from 'react';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../../images/spinner.gif';
import { getAllUsers } from '../../api';
import Pagination from '../Common/Pagination';
import UserGrid from './UserGrid';
import { PAGE_LIMIT } from '../../constants';

const count = getAllUsers(1);
let resource2 = getAllUsers(1);

const Users = () => {
  const [resource, setResource] = useState(resource2);
  const [pageCount, setPageCount] = useState(0);
  const response = count.read();

  useEffect(() => {
    setPageCount(Math.ceil(response.totalCount / PAGE_LIMIT));
    // eslint-disable-next-line
  }, []);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    setResource(getAllUsers(currentPage));
  }

  return (
    <>
      <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}>
        <RenderUsers resource={resource} />
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} /> 
      </Suspense>
    </> 
  )
}
  
const RenderUsers = ({ resource }) => {
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
  const usersList = groupRowsByColNum(response.data, 6);

  return (
    <UserGrid usersList={usersList} />
  )  
}
export default Users;