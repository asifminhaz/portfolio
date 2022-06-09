import React from 'react';

const Contact = () => {
   // function sendEmail  (e) {
   //    e.preventDefault()

   //    emailjs.sendForm('service_1ktc0vi','template_m9k8062' )
   // }
          return (
                    <div>
                       <h1 className='text-2xl text-center font-semibold'>Contact with me </h1>       
                       <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Hire Me!</h1>
      <p class="py-6">Please fill this form and send me an email for hire me. </p>
    </div>
 
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">name</span>
          </label>
          <input type="text" name='name' placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" name='user_email' placeholder="password" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <input type="text" name='message' placeholder="Description" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>

  </div>
</div>
                    </div>
          );
};

export default Contact;