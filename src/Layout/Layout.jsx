import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet }  from "react-router-dom";
import Footer from '../components/Footer';
import { MdBoy, MdConstruction } from 'react-icons/md'
import { LuConstruction } from 'react-icons/lu'
function Layout() {
    return ( 
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <div className='credit'>
                Copyright Ⓒ 2024 Foodie. All Rights Reserved.
                <div>
              Crafted by Mohamed Ashraf
                </div>
            </div>
        </div>
    )
}

export default Layout