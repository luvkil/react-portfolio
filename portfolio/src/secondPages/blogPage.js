import React  from "react";

import Blog from "../components/pages/Blog";
import Title from "../components/pages/Title";
import {Carousel} from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import Img1 from "../components/images/javascript-quiz.jpeg";
import Img2 from "../components/images/daily-planner.jpeg";
import Img3 from "../components/images/group-project.jpeg";
import "../components/style.css";

function blogPage (){
    return(
      
    <Blog>
<Title>My Projects</Title>



 
<div className="carousel">
        
<Carousel>
  <Carousel.Item>
    <img 
      className=" blogImage"
      src={Img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"goldenrod"}}>javaSript-Quiz</h3>
      <p style={{color:"goldenrod"}}>Test your javaScript knowldeg</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="blogImage"
      src={Img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"goldenrod"}}>The Daily Planner</h3>
      <p style={{color:"goldenrod"}} >A planner for busy people.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  
      className="blogImage"
      src={Img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:"goldenrod"}}>The Move Match Maker</h3>
      <p style={{color:"goldenrod"}} >Combines Drink and Your favourite Movie.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>
        
  </Blog> 
     
    )

}

export default blogPage;