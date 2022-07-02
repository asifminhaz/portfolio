import React from 'react';
import food from './../asset/food.png'
const Theveg = () => {
          return (
                    <div>
                    <h2 className='text-center'>The veg tickle</h2>

                    <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={food} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
<div>
          
<h1 className='font-bold m-10'>Technology used on This project</h1>
            <ul className='m-10 from-stone-900'>
                      <li>Tailwind css</li>
                      <li>react</li>
                      <li>react-tailwind</li>
                      <li>react-router-dom</li>
                      <li>Flowbite</li>

            </ul>
            <h3 className='m-10'>This website is about a food delivery.You  can choose your favourite food from this website and ordered your food.Also This website show some latest customer reviews and a form to contact.Showing some special offers .</h3>
</div>
<div className='m-10'>
<a className='font-bold' href="https://thevegtickle.netlify.app/"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/my-food"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
</div>
 </div> 
          );
};

export default Theveg;