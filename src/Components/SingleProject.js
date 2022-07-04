import React from 'react';
import { Link } from 'react-router-dom';
import gym from './../asset/gym.png'
import motopart from './../asset/motopart (3).png'
import watch from './../asset/watch.png'
import convention from './../asset/convention.png'
import food from './../asset/food.png'
import influencer from './../asset/influencer.png'
import html from './../asset/html.png'
const SingleProject = () => {
          return (
                    <div id='project'>
                              <h1 className='text-3xl text-center font-bold p-10'>My Projects</h1>
                           
                              <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-12 lg:grid-cols-3  mx-10'>
   <div class="card w-96 m-5  bg-base-100 shadow-xl " data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img className='h-50 ' src={gym} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center">
    <h2 class="card-title justify-center m-2">Gym With Asif</h2>
    <p className='p-3'>On this website, there was a home, blog, login section
On the home page, there was a service section show some services.
There was a log-in or registration page, you can also register with a google account.</p>
    <div class="card-actions">
      <Link className='mx-auto' to='/gym'><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
  
</div>
                              
   <div class="card w-96 m-5  bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img className='h-50' src={motopart} alt="Shoes" class="rounded-xl h-80" />
  </figure>
  <div class=" items-center text-center">
    <h2 class="card-title justify-center m-2">Moto parts</h2>
    <p className='p-3'> This website  is about motoparts manufacturer.In my website there was a home page purchase, contact,footer, a simple dashboard, log in form registration form etc. you can easily purchase product from clicking on the purchase button . see your orders add a review also see your profile on my dashboard
You can add any products easily from add product page..</p>
    <div class="card-actions">
      <Link className='mx-auto' to='/moto'><button class="btn btn-success">Details </button></Link>
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
<div class="card w-96 m-5 max-h-full bg-base-100 shadow-xl" data-aos="zoom-out"
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
</div>
<div class="card w-96 m-5 max-h-full bg-base-100 shadow-xl" data-aos="zoom-out"
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
</div>
</div>
                    </div>
          );
};

export default SingleProject;