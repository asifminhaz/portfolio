import React from 'react';
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
                    </div>
          );
};

export default Home;