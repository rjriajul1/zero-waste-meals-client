import React from 'react';
import Navbar from '../pages/sharedPages/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/sharedPages/footer/Footer';

const MainLayout = () => {
    return (
        <div className='relative'>
            <div className='sticky top-0 z-10'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;