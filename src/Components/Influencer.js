import React from 'react';
import influencer from './../asset/influencer.png'
const Influencer = () => {
          return (
                    <div>
                    <h2 className='text-center'>Influencer Products</h2>

                    <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={influencer} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
<div>
          
<h1 className='font-bold m-10'>Technology used on This project</h1>
            <ul className='m-10 from-stone-900'>
                      <li>HTML</li>
                      <li>CSS</li>
                      
                    
            </ul>
            <h3 className='m-10'>On this website, there was showing a banner and some various types of products all influencer needed most . you can buy this product easily .
</h3>
</div>
<div className='m-10'>
<a className='font-bold' href="https://asifminhaz.github.io/influencer-gear/"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/influencer-gear"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
</div>
 </div> 
          );
};

export default Influencer;