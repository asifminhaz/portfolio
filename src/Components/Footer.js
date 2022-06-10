import React from 'react';
import { Link } from 'react-router-dom';
import Linkedin from "../asset/Linkedin.png"
const Footer = () => {
          return (
                    <div>
                             <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div class="grid grid-flow-col gap-4">
    <Link to="/about" class="link link-hover">About</Link> 
    <Link to="/contact" class="link link-hover">Contact</Link> 
 
    
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href='https://www.linkedin.com/in/minhazur-rahman-asif-9a456722a/'><img className='w-12 h-10' src={Linkedin} alt="/"></img></a> 
     
   
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by Minhazur Rahman</p>
  </div>
</footer> 
                    </div>
          );
};

export default Footer;