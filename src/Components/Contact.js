import React from 'react';
import emailjs from "@emailjs/browser";
const Contact = () => {
   function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('service_c3834b8', 'template_k6yd07g', e.target, 'wkQF38LUlQxPmW0VQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  
          return (
            <div>
               <h1 className='font-bold text-2xl p-4 text-slate-800'>Contact With Me</h1>
            <div className="container m-10 mx-auto justify-center align-middle justify-items-center">
<form onSubmit={sendEmail}>
 <div className="row pt-5 mx-auto justify-center">
     <div className="col-8 form-group mx-auto">
     <label class="label">
<span class="label-text font-bold">Name</span>
</label>
         <input  type="text" className="form-control border" placeholder="Name" name="name"/>
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
     <label class="label">
<span class="label-text font-bold">Email</span>
</label>
         <input type="email" className="form-control border" placeholder="Email Address" name="email"/>
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
     <label class="label">
<span class="label-text font-bold">Subject</span>
</label>
         <input type="text" className="form-control border" placeholder="Subject" name="subject"/>
     </div>
     <div className="col-8 form-group pt-2 mx-auto">
     <label class="label">
<span class="label-text font-bold">Message</span>
</label>
         <textarea className="form-control border" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
     </div>
     <div className="col-8 pt-3 mx-auto">
         <input type="submit" className="btn btn-primary" value="Send Message"></input>
     </div>
 </div>
</form>
</div>


   
 </div>
          );
};

export default Contact;