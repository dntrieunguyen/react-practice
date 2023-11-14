import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout() {
   return (
      <>
         <Navbar></Navbar>
         <section className="min-h-[650px]">
            <Outlet></Outlet>
         </section>
         <Footer></Footer>
      </>
   );
}

export default Layout;
