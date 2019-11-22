import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navbar.js'
import imageName from "./img/resizedWebdev.jpg"
import nasaPic1 from "./img/nasaPic1.jpg"
import nasaPic2 from "./img/nasaPic2.jpg"
import profilePic from "./img/profilePic.jpg"
import calculator from "./img/calculator.jpg"
import newsFeed from "./img/news-feed.jpg"
import newFeed2 from "./img/news-feed2.jpg"
import LambdaTimes1 from "./img/LambdaTimes1.jpg"
import LambdaTimes2 from "./img/LambdaTimes2.jpg"
import gitCard1 from "./img/git-card1.jpg"
import gitCard2 from "./img/git-card2.jpg"

import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

const Picture = styled.div`
margin : 5% 10%;
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
         <h1 className="aboutMeTitle">Welcome to my portfolio!</h1>
            <div className="aboutMeDiv">
            <h4 className="aboutMe">
            Hi, I'm Ana,
            <br></br>
             and I'm a full stack web developer.
            </h4>
            </div>
            <div className="profilePic">        
              <img className="profileImg"
                src={profilePic}></img> 
            </div>   
            
            <img src={imageName}></img>
         </div>
       </div>
      
  
      <body>
        <Card>
          <CardBody>
            <CardTitle> <h2>Astronomy Photo Of The Day</h2></CardTitle>
            <CardSubtitle></CardSubtitle>
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
            <CardLink href="https://ana-tulea-nasa-photo-of-the-day.netlify.com/">View More</CardLink>
          </CardBody>
        </Card>
        <br></br>
        <Card>
          <CardBody>
            <CardTitle> <h2>Lambda Calculator</h2></CardTitle>
            <CardSubtitle></CardSubtitle>
          </CardBody>
          <Row>
            <Col xs="6"> 
              <Picture>
                <img width="100%" src={calculator} alt="Card image cap" />
              </Picture>
            </Col>
          
            <Col xs="6">
              <CardBody>
                <CardText>Built a calculator by composing components and utilizing props to pass data and functions to children components.</CardText>
                <CardLink href="https://lambda-calculator-tulea.netlify.com/">View More</CardLink>
              </CardBody>
            </Col>
          </Row>
          
        </Card>
        <br></br>
        <Card>
          <CardBody>
            <CardTitle> <h2>Lambda News-Feed</h2></CardTitle>
            <CardSubtitle></CardSubtitle>
          </CardBody>
          <Row>
            <Col xs="6"> 
              <Picture>
                <img width="100%" src={newsFeed} alt="Card image cap" />
              </Picture>
            </Col>
          
            <Col xs="6">
              <Picture>
                <img width="100%" src={newFeed2} alt="Card image cap" />
              </Picture>
            </Col>
          </Row>
          <CardBody>
            <CardText>Built components using Javascript class syntax.</CardText>
            <CardLink href="https://ana-tulea-lambda-school-newsfeed.netlify.com/">View more</CardLink>
          </CardBody>
        </Card>
        <br></br>
        <Card>
          <CardBody>
            <CardTitle> <h2>Lambda Times</h2></CardTitle>
            <CardSubtitle></CardSubtitle>
          </CardBody>
          <Row>
            <Col xs="6"> 
              <Picture>
                <img width="100%" src={LambdaTimes1} alt="Card image cap" />
              </Picture>
            </Col>
          
            <Col xs="6">
              <Picture>
                <img width="100%" src={LambdaTimes2} alt="Card image cap" />
              </Picture>
            </Col>
          </Row>
          <CardBody>
            <CardText>Created a Lambda Newspaper. I created the components 
              that make up the newspaper's home page.
               I did that at first with static data, then
                I requested data from a server and created dynamic components.</CardText>
            <CardLink href="https://tulea-lambda-times.netlify.com/">View More</CardLink>
          </CardBody>
        </Card>
        <br></br>
        <Card>
          <CardBody>
            <CardTitle> <h2>GitHub Card</h2></CardTitle>
            <CardSubtitle></CardSubtitle>
          </CardBody>
          <Row>
            <Col xs="6"> 
              <Picture>
                <img width="100%" src={gitCard1} alt="Card image cap" />
              </Picture>
            </Col>
          
            <Col xs="6">
              <Picture>
                <img width="100%" src={gitCard2} alt="Card image cap" />
              </Picture>
            </Col>
          </Row>
          <CardBody>
            <CardText>Requested data from the Github API and created a component based on the data I gOt back.</CardText>
            <CardLink href="https://ana-tulea-github-card.netlify.com">View More</CardLink>
          </CardBody>
        </Card>
      </body>
      
    <footer>

      <span class="copy-right">© Copy Right 2019</span>
    
  </footer>
      
      </Container>
    </div>
  );
}

export default App;
