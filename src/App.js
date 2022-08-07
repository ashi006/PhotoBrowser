import {Suspense, lazy} from 'react';
import Header from "./components/Header";
import Albums from "./components/Albums";
import Users from "./components/Users";
import SinglePhoto from "./components/SinglePhoto";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from './spinner.gif';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Photos = lazy(() => import("./components/Photos"));

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={
            <Container>
              <Row><h4 className="page-description">You are viewing all available photos</h4></Row>              
              <Suspense fallback={<Row style={{textAlign:"center"}}><Col><img src={Spinner} style={{height: "40px"}} alt="Loading..." /></Col></Row>}><Photos /></Suspense>
            </Container>
          } />
          <Route path='/albums' element={<Albums />} />
          <Route path='/users' element={<Users />} />
          <Route path='/photo/:id' element={
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
