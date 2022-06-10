import React from 'react';
import motodeal from "../asset/motodeal.png"
import motodeal2 from "../asset/motodeal2.png"
import motodeal4 from "../asset/motodeal4.png"

const Moto = () => {
          return (
                    <div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motodeal} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motodeal2} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
       <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500" >
  <figure class="px-10 pt-10">
    <img src={motodeal4} alt="Shoes" class="rounded-xl" />
  </figure>
  </div>

  <div>
            <h1 className='font-bold m-10'>Technology used on This project</h1>
            <ul className='m-10 from-stone-900'>
                      <li>bootstrap</li>
                      <li>firebase</li>
                      <li>react</li>
                      <li>react-bootstrap</li>
                      <li>react-firebase-hooks</li>
                      <li>react-hook-form</li>
                      <li>react-router-dom</li>
                      <li>react-toastify</li>
            </ul>
            <h3 className='m-10'>On this website, you can manage any products you want.
You can deliver or restock products; also you can delete any products from your
inventory page.
You can add any products easily from add product page.You  will surely  enjoy to visit my website .. here are the live links below</h3>
<div className='m-10'>
<a className='font-bold' href="https://motodeal-41ae1.web.app/"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/warehouse-management-website"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
<br></br>
<a href="https://github.com/asifminhaz/warehouse-management-server"><button class="btn btn-outline btn-primary">Server git-hub</button></a>
</div>
  </div>
</div>
                  
          );
};

export default Moto;