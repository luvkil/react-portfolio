import React from "react";
import "../style.css";

function Blog(props) {
  return (
    <div className = "container">
        {props.children}
    </div>
  );
}

export default Blog;
