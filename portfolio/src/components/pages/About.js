import React from "react";
;
function About(props) {
  return (

      

    <div className = "profile bg-primary" style={{color:"goldenrod", backgroundColor:"rgb(25,25,112)"}}>
        {props.children}
    </div>

  );
}

export default About;
