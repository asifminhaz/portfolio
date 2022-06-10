import React from 'react';
import watch from './../asset/watch.png'
import watch2 from './../asset/watch2.png'
import watch3 from './../asset/watch3.png'
const Watch = () => {
          return (
                    <div>
                              <h1 className='text-center'>Welcome to watch Store</h1>
                              <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={watch} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
                              <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={watch2} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
                              <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={watch3} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
<div>
                   
<h1 className='font-bold m-10'>Technology used on This project</h1>
            <ul className='m-10 from-stone-900'>
                      <li>bootstrap</li>
                      <li>react</li>
                      <li>react-bootstrap</li>
                      <li>recharts</li>
                     
                      <li>react-hook-form</li>
                      <li>react-router-dom</li>
                      <li>react-toastify</li>
            </ul>
            <h3 className='m-10'>On this website, there was a home, reviews, and dashboard section
On the home page, there were showing some customer reviews
There was also a dashboard page you can see there business summary.</h3>
<div className='m-10'>
<a className='font-bold' href="https://effortless-speculoos-e2a8e1.netlify.app/"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/watches-website"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
</div>
</div>
                    </div>
          );
};

export default Watch;