import React from 'react';
import starbucks from './../asset/starbucks.png'
import starbucks2 from './../asset/starbucks2.png'
import starbucks3 from './../asset/starbucks3.png'
import starbucks4 from './../asset/starbucks4.png'

const Starbucks = () => {
    return (
        <div>
        <h1 className='text-center font-bold text-3xl'>Starbucks</h1>
        <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={starbucks} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={starbucks2} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={starbucks3} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={starbucks4} alt="Shoes" class="rounded-xl" />
</figure>
</div>

 

<div>
        
        <h3 className='m-10'> This website  is about Marketing website .Help to branding and marketing</h3>
<div className='m-10'>
<a className='font-bold' href="https://starbucks-asif-b6b0c3.netlify.app/home"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/starbuck"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
<br></br>

</div>
</div>
    </div>
    );
};

export default Starbucks;