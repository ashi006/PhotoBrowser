import {Suspense, lazy} from 'react';
import Header from "./components/Common/Header";
import SinglePhoto from "./components/Photos/SinglePhoto";
import SingleUser from "./components/Users/SingleUser";
import SingleAlbum from "./components/Albums/SingleAlbum";
import PageNotFound from "./components/Common/PageNotFound";
import Footer from "./components/Common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from './images/spinner.gif';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Photos = lazy(() => import("./components/Photos/Photos"));
const Albums = lazy(() => import("./components/Albums/Albums"));
const Users = lazy(() => import("./components/Users/Users"));

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={
            <Container>
              <Row><h4 className="page-description">You are viewing all available photos</h4></Row>              
              <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}><Photos  /></Suspense>
            </Container>
          } />
          <Route path='albums' element={
            <Container>
              <Row><h4 className="page-description">You are viewing all available albums</h4></Row>   
              <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}><Albums /></Suspense>
            </Container>
          } />
          <Route path='users' element={
            <Container>
              <Row><h4 className="page-description">You are viewing all users</h4></Row>              
              <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}><Users /></Suspense>
            </Container>
          } />
          <Route path='user/:id' element={
              <Container>
                <Row><h4 className="page-description">Single User Details</h4></Row>
                <SingleUser />
            </Container>
          }/>
          <Route path='album/:id' element={
              <Container>
                <Row><h4 className="page-description">Single Album Details</h4></Row>
                <SingleAlbum />
            </Container>
          }/>
          <Route path='photo/:id' element={
            <Container>
              <Row><h4 className="page-description">Single Photo Details</h4></Row>
              <SinglePhoto />
            </Container>
            } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
