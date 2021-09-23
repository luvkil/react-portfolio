import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import blogPage from "./secondPages/blogPage";
import contactPage from "./secondPages/contactPage";
import secondHome from "./secondPages/secondHome";
function App() {
  return (
    
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={secondHome} />
        <Route exact path="/blog" component={blogPage} />
        <Route path="/contact" component={contactPage} />
      </div>
    </Router>


    
  );
  
}




export default App;
