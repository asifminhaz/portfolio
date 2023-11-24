import React from 'react';
import eshopping1 from './../asset/eshopping1.png'
import eshopping2 from './../asset/eshopping2.png'
import eshopping3 from './../asset/eshopping3.png'
import eshopping4 from './../asset/eshopping4.png'
import eshopping5 from './../asset/eshopping5.png'
import eshopping6 from './../asset/eshopping6.png'
import eshopping7 from './../asset/eshopping7.png'
const Eshopping = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Eshopping</h1>
            <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping1} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping2} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping3} alt="Shoes" class="rounded-xl" />
  </figure>
  </div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping4} alt="Shoes" class="rounded-xl" />
  </figure>
  </div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping5} alt="Shoes" class="rounded-xl" />
  </figure>
  </div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping6} alt="Shoes" class="rounded-xl" />
  </figure>
  </div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={eshopping7} alt="Shoes" class="rounded-xl" />
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
                      <li>mongodb</li>
                      <li>node js</li>
                      <li>Express js</li>
                      <li>Stripe js</li>
                     
                      <li>react-router-dom</li>
                      
            </ul>
            <h3 className='m-10'> This website  is about eccomerce .In my website you can perchase products</h3>
<div className='m-10'>
<a className='font-bold' href="https://e-shopping-343da.web.app/"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/e-shopping-client"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
<br></br>
<a href="https://github.com/asifminhaz/eshopping-server"><button class="btn btn-outline btn-primary">Server git-hub</button></a>
</div>
  </div>
        </div>
    );
};

export default Eshopping;