import React from 'react'; 

import PropTypes from "prop-types"; 
import Facebook from '../images/facebook.jpg'
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.jpg';






const Contact = props =>{
    const styleObject = { color: "red" , textAlign: 'center' }


 
       
        return (
           


            <div style={styleObject} id="Contact">
          <h1>Contact</h1>
          <p> tel : {props.tel} </p>
          <p> email : {props.email}</p>
          <p>  adresse : {props.adresse}</p>
      
      
      
          
         <a href="https://www.facebook.com/">
          <img  src={Facebook} alt="fb"  width="100" height="50" /></a>
          <a href="https://www.instagram.com/?hl=fr>">
          <img  src={Instagram} alt="insta" width="100" height="50" /></a>
          <a href="https://fr.linkedin.com/" >
          <img  src={Linkedin} alt="lin"  width="100" height="50" /></a>
      
        </div>
     
             
        );
    }
Contact.defaultProps ={
    tel :123456789 , adresse: "sidi bouzid" , email: "guesmiichrak24@gmail.com"
    
}
export default Contact 
