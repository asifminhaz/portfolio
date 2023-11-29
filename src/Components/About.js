import React from 'react';
import asif2 from "../asset/asif2.jpg"
const About = () => {
          return (
            <div class="card lg:card-side bg-base-100 shadow-xl bg-black text-white mb-96 m-16">
  <figure><img className='w-96 p-8' src={asif2} alt="Album"></img></figure>
  <div class="card-body mt-12" >
    <h2 class="card-title">About Me!!</h2>
    <p className='text-2xl '>I am a Junior Web Developer. I can handle multiple tasks on a daily basis, and I use a creative approach to solve problems. I am flexible in my working hours, being able to work evenings and weekends. I am trying my best to try out new projects and learn different things, and I am never afraid to go outside my comfort zone.</p>
 
  </div>
</div>
          );
};

export default About;