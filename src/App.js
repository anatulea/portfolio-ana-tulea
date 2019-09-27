import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navbar.js'
import imageName from "./img/resizedWebdev.jpg"
import nasaPic1 from "./img/nasaPic1.jpg"
import nasaPic2 from "./img/nasaPic2.jpg"

import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

const Picture = styled.div`
margin : 10px 20px;
`;

function App() {
  return (
    <div className="App">
      <header >
       <Navigation></Navigation>
       </header>
       <Container>
        <Row>
          <Col></Col>
        </Row>
       <div className="top-image">
         <div className="image">
            <img src={imageName}></img>
         </div>
       </div>
      
  
      <body>
        <Card>
          <CardBody>
            <CardTitle>Astronomy Photo Of The Day</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <Row>
            <Col xs="6"> 
              <Picture>
                <img width="100%" src={nasaPic1} alt="Card image cap" />
              </Picture>
            </Col>
          
            <Col xs="6">
              <Picture>
                <img width="100%" src={nasaPic2} alt="Card image cap" />
              </Picture>
            </Col>
          </Row>
          <CardBody>
            <CardText>The application was created using React. 
              I used data from a NASA API and introduced it into my page.
               I styled the application using Reactstrap and Stayled components.</CardText>
            <CardLink href="https://ana-tulea-nasa-photo-of-the-day.netlify.com/">See my work</CardLink>
    
          </CardBody>
        </Card>
      </body>
      </Container>
    </div>
  );
}

export default App;
