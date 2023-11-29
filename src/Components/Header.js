import React from 'react';
import { Link } from 'react-router-dom';
import asif2 from "../asset/asif2.jpg"
const Header = () => {
          return (
  <div>
<div class="hero min-h-screen bg-success-content" >
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img className='w-96 rounded-full' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={asif2}  />
    <div  data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <h1 class="text-5xl font-bold text-white">Hello</h1>
      <h1 class="text-5xl font-bold text-white">I'm Minhazur</h1>
      <h1 class="text-5xl font-bold text-white">Rahman</h1>
      <p class="py-6 text-white">I am a Junior web Developer. I build things for the web.</p>
      <a href='https://docs.google.com/document/d/1TeXAtkplNASpH2kIrQbB4uz_dnE_OU_0DQ9l3HC5FMQ/edit?usp=sharing'><button class="btn btn-white text-white">Download Resume</button></a>
      <Link className='m-7 sm:mt-3 md:mt-3' to='/contact'><button class="btn btn-white text-white">contact me</button></Link>
    </div>
  </div>
</div>
          </div>
          );
};

export default Header;