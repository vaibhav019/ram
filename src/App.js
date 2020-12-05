//import logo from './logo.svg';

import './App.css';

import Header from './component/Header';
import ProjectDetail from './component/ProjectDetail';
import {Row,Col} from 'reactstrap'
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Row>
      <Col xs="4"><ProjectDetail/></Col>
      <Col xs="4"><ProjectDetail/></Col>
      <Col xs="4"><ProjectDetail/></Col>
    </Row>
    <Row>
    <Col xs="4"><ProjectDetail/></Col>
    <Col xs="4"><ProjectDetail/></Col>
    <Col xs="4"><ProjectDetail/></Col>
  </Row>
     <Footer/>
    </div>
  );
}

export default App;
