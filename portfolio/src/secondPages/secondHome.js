
import React from "react";
import About from "../components/pages/About.js";
import profileImage from "../components/images/profile-image.jpg"


function secondHome() {
  return (
    <About>
          <div>
          <img src={profileImage} alt="profile"/>
          
          </div>
    



      <div>
      <p>
        I am currently a student at theWhile currently I have no previous experience as a software developer I have a passion for learning and solving problems. 
        By solving problem I mean finding new ways to reach people and bring solution that was never thought of before. Besides going to school and working 
        I have interest in designing and teaching others to actualize themselves
        
      </p>
      </div>
      
      
  </About>
  );
}

export default secondHome;




