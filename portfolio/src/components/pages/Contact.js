import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        You can reach out to me at anytime. Here are my contact inforamation:
      </p>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Email
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Phone#
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
