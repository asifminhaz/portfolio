import React from 'react';
import { Link } from 'react-router-dom';
import food from './../asset/food.png'
import html from './../asset/html.png'
import eshopping1 from './../asset/eshopping1.png'
import instrument1 from './../asset/instrument1.png'
import starbucks from './../asset/starbucks.png'
import Skill from './Skill';
const SingleProject = () => {
          return (
                    <div id='project'>
                      <div className='text-center text-1xl text-center font-bold '>
                      <h1 className='p-10 text-3xl'>My Skills</h1>
                      <ul className="steps steps-vertical">
                      <li className="step step-info">HTML</li>
  <li className="step step-info">CSS</li>
  <li className="step step-info">JAVASCRIPT</li>
  <li className="step step-info">REACT JS</li>
  <li className="step step-info">BOOTSTRAP</li>
  <li className="step step-info">TAILWIND</li>
  <li className="step step-info">MONGODB</li>
  <li className="step step-info">NODE JS</li>
  <li className="step step-info">EXPRESS JS</li>
  

</ul>



                      </div>
                              <h1 className='text-3xl text-center font-bold p-10'>My Projects</h1>
                              
                           
  <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-12 lg:grid-cols-3  mx-10'>
   <div class="card w-96 m-5  bg-base-100 shadow-xl " data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50 ' src={instrument1} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center">
    <h2 class="card-title justify-center m-2">Instrument</h2>
    <p className='p-3'>This is a buissness marketing website .</p>
    <div class="card-actions">
      <Link className='mx-auto' to='/instrument'><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
  
</div>
   <div class="card w-96 m-5  bg-base-100 shadow-xl " data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50 ' src={eshopping1} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center">
    <h2 class="card-title justify-center m-2">Eshopping</h2>
    <p className='p-3'>On this website, there was a home, men, women, kid login section.You can buy products from here</p>
    <div class="card-actions">
      <Link className='mx-auto' to='/eshopping'><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
  
</div>
   <div class="card w-96 m-5  bg-base-100 shadow-xl " data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50 ' src={starbucks} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center">
    <h2 class="card-title justify-center m-2">Starbucks</h2>
    <p className='p-3'></p>
    <div class="card-actions">
      <Link className='mx-auto' to='/starbucks'><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
  
</div>
                              
  



<div class="card w-96 m-5 max-h-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50' src={food} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center text-center">
    <h2 class="card-title justify-center m-2">The veg tickle</h2>
    <p className='p-3 '>This website is about a food delivery.You  can choose your favourite food from this website and ordered your food.Also This website show some latest customer reviews and a form to contact.Showing some special offers ..</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/theveg" ><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div>
<div class="card w-96 m-5 max-h-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50' src={html} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center text-center">
    <h2 class="card-title justify-center m-2">Personal website</h2>
    <p className='p-3 '> This website is very simple . create with pure html and css .It is all about my career mission.It was full responsive website with only using html  and css</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/personal" ><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div>
{/* <div class="card w-96 m-5 max-h-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50' src={influencer} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center text-center">
    <h2 class="card-title justify-center m-2">Influencer Products</h2>
    <p className='p-3 '>On this website, there was showing a banner and some various types of products all influencer needed most . you can buy this product easily .</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/influencer" ><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div> */}
{/* <div class="card w-96 m-5 max-h-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50' src={convention} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center text-center">
    <h2 class="card-title justify-center m-2">Convention center</h2>
    <p className='p-3 '> This website is all about booking a convention center for wedding ceremony. Also showing some special offers for customers.</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/convention" ><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div> */}
</div>
                    </div>
          );
};

export default SingleProject;