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
                    <div>
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
    <p className='p-3'>On this website, you can manage any products you want.
You can deliver or restock products; also you can delete any products from your
inventory page.
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
    <p className='p-3 '>On this website, there was a home, reviews, and dashboard section
On the home page, there were showing some customer reviews
There was also a dashboard page you can see there business summary.</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/watch" ><button class="btn btn-success">Details </button></Link>
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
    <h2 class="card-title justify-center m-2">watch Store</h2>
    <p className='p-3 '>On this website, there was a home, reviews, and dashboard section
On the home page, there were showing some customer reviews
There was also a dashboard page you can see there business summary.</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/watch" ><button class="btn btn-success">Details </button></Link>
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
    <h2 class="card-title justify-center m-2">watch Store</h2>
    <p className='p-3 '>On this website, there was a home, reviews, and dashboard section
On the home page, there were showing some customer reviews
There was also a dashboard page you can see there business summary.</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/watch" ><button class="btn btn-success">Details </button></Link>
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
    <p className='p-3 '>On this website, there was a home, reviews, and dashboard section
On the home page, there were showing some customer reviews
There was also a dashboard page you can see there business summary.</p>
    <div class="card-actions">
      <Link className='mx-auto' to="/watch" ><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div>
</div>
                    </div>
          );
};

export default SingleProject;