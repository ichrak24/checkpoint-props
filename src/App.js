import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css';
import PropTypes from "prop-types"; 
import Navbarcomponent from './profile/Profile component/navbar.component';
import ProfileComponent  from './profile/Profile component/Profilecomponent';
import Aboutme from './profile/Profile component/about me';
import Contact from './profile/Profile component/contact';
import myImg from './profile/images/image.jpg'

function App()  {
  
  return (
    <div className="App">
       <ProfileComponent name="ichrak guesmi"  myimg={myImg}   />
     
      <br />
       <Navbarcomponent />
       <Aboutme />
      
       
       <Contact tel="51932395" email="guesmiichrak3@gmail.com" adresse="Rue sidi Sofiane , le passage , tunis"  />
      

    </div>
  );
}


export default App;
