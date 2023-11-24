import React from 'react';
import instrument1 from './../asset/instrument1.png'
import instrument2 from './../asset/instrument2.png'
import instrument3 from './../asset/instrument3.png'
import instrument4 from './../asset/instrument4.png'
import instrument5 from './../asset/instrument5.png'
const Instrument = () => {
    return (
        <div>
        <h1 className='text-center font-bold text-3xl'>Instrument</h1>
        <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={instrument1} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={instrument2} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={instrument3} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={instrument4} alt="Shoes" class="rounded-xl" />
</figure>
</div>
   <div class="card w-full bg-base-100 shadow-xl" data-aos="zoom-out"
 data-aos-easing="linear"
 data-aos-duration="1500" >
<figure class="px-10 pt-10">
<img src={instrument5} alt="Shoes" class="rounded-xl" />
</figure>
</div>
 

<div>
        
        <h3 className='m-10'> This website  is about Marketing website .Help to branding and marketing</h3>
<div className='m-10'>
<a className='font-bold' href="https://instrument-b591c9.netlify.app/home"><button class="btn btn-outline btn-primary">Live Site</button></a>
<br></br>
<a href="https://github.com/asifminhaz/simple-website"><button class="btn btn-outline btn-primary">Client git-hub</button></a>
<br></br>

</div>
</div>
    </div>
    );
};

export default Instrument;