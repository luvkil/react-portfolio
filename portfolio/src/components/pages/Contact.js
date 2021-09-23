import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div className = "container border">
        {props.children}
    </div>
  );
}

export default Contact;
