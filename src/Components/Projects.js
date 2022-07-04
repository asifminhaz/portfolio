import React from 'react';
import { Link } from 'react-router-dom';
import gym from './../asset/gym.png'
import motopart from './../asset/motopart (3).png'
import food from './../asset/food.png'

const Projects = () => {
          return (
            <div>
            <div>
            <h1 className='text-3xl text-center font-bold p-10'>My Projects</h1>
            <div>
            <div class="card w-50 bg-base-100 shadow-xl" data-aos="zoom-out"
data-aos-easing="linear"
data-aos-duration="1500">
<figure class="px-10 pt-10">
<img src={gym} alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body items-center text-center">
<h2 class="card-title">Gym With Asif</h2>
<p>On this website, there was a home, blog, login section
On the home page, there was a service section show some services.
There was a log-in or registration page, you can also register with a google account.</p>
<div class="card-actions">
<Link to='/gym'><button class="btn btn-success">Details </button></Link>
</div>
</div>
</div>
            </div>
            <div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center"></div> 
  <div class="divider"></div> 
</div>
            <div class="card w-50 bg-base-100 shadow-xl" data-aos="zoom-out"
data-aos-easing="linear"
data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={motopart} alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body items-center text-center">
<h2 class="card-title">Motopart</h2>
<p>This website  is about motoparts manufacturer.In my website there was a home page purchase, contact,footer, a simple dashboard, log in form registration form etc. you can easily purchase product from clicking on the purchase button . see your orders add a review also see your profile on my dashboard.</p>
<div class="card-actions">
<Link to='/moto'><button class="btn btn-success">Details </button></Link>
</div>
</div>
</div>
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-base-300 rounded-box place-items-center">contt</div> 
  <div class="divider"></div> 

</div>
<div class="card w-50 bg-base-100 shadow-xl" data-aos="zoom-out"
data-aos-easing="linear"
data-aos-duration="1500">
<figure class="px-10 pt-10">
<img src={food} alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body items-center text-center">
<h2 class="card-title">The veg tickle</h2>
<p>This website is about a food delivery.You  can choose your favourite food from this website and ordered your food.Also This website show some latest customer reviews and a form to contact.Showing some special offers </p>
<div class="card-actions">
<Link to="/theveg" ><button class="btn btn-success">Details </button></Link>
</div>
</div>
</div>
  </div>
  </div>
          );
};

export default Projects;