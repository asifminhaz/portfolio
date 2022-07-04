import React from 'react';
import Contact from './Contact';
import Header from './Header';
import Mailer from './Mailer';
import MySkills from './MySkills';
import SingleProject from './SingleProject';

const Home = () => {
          return (
                    <div>
                           <Header></Header>
                           <SingleProject></SingleProject>
                           {/* <MySkills></MySkills> */}
                           <h1 className='text-center text-4xl font-bold mt-12'>Contact Me</h1>
                           <Contact></Contact>
                    </div>
          );
};

export default Home;