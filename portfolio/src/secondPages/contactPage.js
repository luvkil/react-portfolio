import React from "react";
import Contact from "../components/pages/Contact.js";
import "../components/style.css";


function contactPage(){
    return(
        <Contact>
            <div className="contact">
                <h1 className="">Contact Here</h1>
                <form className="row" style={{margin:"25px 85px 75px 100px"}}>
                    <label>Name</label>
                    <input type="text" name="name" className="form-control"/>

                    <label>Email</label>
                    <input type="Email" name="user"className="form-control" />

                    <label>Message</label>
                    <textarea name="massage"row ="4"className="form-control"  />
                    <input type="submit" value="send" className="form-control btn btn-primary"/>
      
                </form>
            </div>
        
        </Contact>
    )
}

export default contactPage;