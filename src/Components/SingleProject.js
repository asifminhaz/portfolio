import React from 'react';
import { Link } from 'react-router-dom';
import gym from './../asset/gym.png'
import motodeal from './../asset/motodeal.png'
import watch from './../asset/watch.png'
const SingleProject = () => {
          return (
                    <div>
                              <h1 className='text-3xl text-center font-bold p-10'>My Projects</h1>
                              <div>
                              <div class="card w-96 bg-base-100 shadow-xl" data-aos="zoom-out"
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
                              <div class="card w-96 bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motodeal} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Warehouse Management</h2>
    <p>On this website, you can manage any products you want.
You can deliver or restock products; also you can delete any products from your
inventory page.
You can add any products easily from add product page..</p>
    <div class="card-actions">
      <Link to='/moto'><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div>
<div class="card w-96 bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={watch} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">watch Store</h2>
    <p>On this website, there was a home, reviews, and dashboard section
On the home page, there were showing some customer reviews
There was also a dashboard page you can see there business summary.</p>
    <div class="card-actions">
      <Link to="/watch" ><button class="btn btn-success">Details </button></Link>
    </div>
  </div>
</div>
                    </div>
          );
};

export default SingleProject;