import React from 'react';
import html from './../asset/html.png'
const Personal = () => {
          return (
                    <div>
                    <h2 className='text-center'>Personal Website</h2>

                    <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
     data-aos-easing="linear"
     data-aos-duration="1500">
  <figure class="px-10 pt-10">
    <img src={html} alt="Shoes" class="rounded-xl" />
  </figure>
</div>
<div>
          
<h1 className='font-bold m-10'>Technology used on This project</h1>
            <ul className='m-10 from-stone-900'>
                      <li>HTML</li>
                      <li>CSS</li>
                      
            </ul>
            <h3 className='m-10'>This website is very simple. create with pure html and css .It is all about my career mission.It was full responsive website with only using html  and css</h3>
</div>
<div className='m-10'>
<a className='font-bold' href="https://asifminhaz.github.io/my-first-assignment/"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href=" https://github.com/asifminhaz/my-first-assignment"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
</div>
 </div> 
          );
};

export default Personal;