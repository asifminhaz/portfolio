import React from 'react';
import motopart from './../asset/motopart (3).png'
import motopart2 from "./../asset/motpart2.png"
import motopart1 from "./../asset/motopart1.png"

const Moto = () => {
          return (
                    <div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motopart} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motopart2} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motopart1} alt="Shoes" class="rounded-xl" />
  </figure>
  </div>

  <div>
            <h1 className='font-bold m-10'>Technology used on This project</h1>
            <ul className='m-10 from-stone-900'>
                      <li>Tailwind</li>
                      <li>firebase</li>
                      <li>react</li>
                      <li>react-tailwind</li>
                      <li>daisyUi</li>
                      <li>react-firebase-hooks</li>
                      <li>react-hook-form</li>
                      <li>react-router-dom</li>
                      <li>react-toastify</li>
            </ul>
            <h3 className='m-10'> This website  is about motoparts manufacturer.In my website there was a home page purchase, contact,footer, a simple dashboard, log in form registration form etc. you can easily purchase product from clicking on the purchase button . see your orders add a review also see your profile on my dashboard</h3>
<div className='m-10'>
<a className='font-bold' href="https://motoparts-79342.web.app/home"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/motopart-website"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
<br></br>
<a href="https://github.com/asifminhaz/motopart-server-website"><button class="btn btn-outline btn-primary">Server git-hub</button></a>
</div>
  </div>
</div>
                  
          );
};

export default Moto;