import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='ttxt'><b>My Poodle's </b> </h1>
      
      <div className='App'>
       
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  

  <CardGroup>
      <Card className='card'>
        <Card.Img variant="top" src="src\assets\poodle.webp" className='btimg'/>
        <Card.Body>
          <Card.Title> <b>Standard Poodle</b> </Card.Title>
          <Card.Text>
          Standard poodles are an energetic, 
          intelligent dog breed that thrives with lots of activity, 
          learning, and time with their human.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Img variant="top" src="src\assets\toypoodle2.jpeg" className='btimg' />
        <Card.Body>
          <Card.Title><b>Toy poodle</b></Card.Title>
          <Card.Text>
          The toy poodle is a breed of toy dog known for its air of
           distinction and dignity because of its elegant look,
            springy gait, and proud manner of carrying itself.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
     
      </Card>
      <Card>
        <Card.Img variant="top" src="src\assets\teacup-poodle.jpg" className='btimg' />
        <Card.Body>
          <Card.Title> <b>Tea cup poodle</b> </Card.Title>
          <Card.Text>
          Teacup Poodles are an adorable, friendly and loving dog. 
          Their small size means they can adapt to any environment 
          and they don't have a lot of care needs.They weigh as little as 2kg, and be 20cm tall!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>. 
    </div>
    </>
  )
}

export default App
 