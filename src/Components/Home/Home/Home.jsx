import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
       <div>
         <Navbar></Navbar>
        <Banner></Banner>
        <Category></Category>
        <Footer></Footer>
       </div>
    );
};

export default Home;