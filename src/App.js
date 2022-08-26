import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <Container fluid>
      <Row className='p-5'>
        <Col xs="12" md={{span: 8, offset: 2}}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
