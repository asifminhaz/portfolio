import React from 'react';
import Header from './Header';
import Mailer from './Mailer';
import SingleProject from './SingleProject';

const Home = () => {
          return (
                    <div>
                           <Header></Header>
                           <SingleProject></SingleProject>
                           <Mailer></Mailer>
                    </div>
          );
};

export default Home;