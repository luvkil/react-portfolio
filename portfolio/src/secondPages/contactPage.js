import React from "react";
import Contact from "../components/pages/Contact.js";
import "../components/style.css";
import Email from 'emailjs-com';



function sendEmail(e){
    e.preventDefault()
    Email.sendFrom("service_c8k4ec8","template_xnocjhz",e.target,"user_QPDVlcIotLPf1QGq0frNz")
    .then(respond=>{
            console.log(respond)
    }).catch(err=>console.log(err));
}

function contactPage(){
    return(
        <Contact>
            <div className="contact">
                <h1 className="">Contact Here</h1>
                <form className="row" style={{margin:"25px 85px 75px 100px"}} onsubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" className="form-control"/>

                    <label>Email</label>
                    <input type="Email" name="user_email"className="form-control" />

                    <label>Message</label>
                    <textarea name="massage"row ="4"className="form-control"  />
                    <input type="submit" value="send" className="form-control btn btn-primary" style={{marginTop:'30px'}}/>
      
                </form>
            </div>
        
        </Contact>
    )
}

export default contactPage;