import React from "react";
import "../style.css";

function Blog(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Theme:</strong> {props.theme}
          </li>
          <li>
            <strong>Tools</strong> {props.tools}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;
