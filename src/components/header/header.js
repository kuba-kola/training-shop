import React from 'react';
import search from "../../assets/png/search.png";
import globe from "../../assets/png/globe.png";
import user from "../../assets/png/user.png";
import shoppingBag from "../../assets/png/shopping-bag.png";
import { Navbar } from '../navbar/navbar';
import {Link} from "react-router-dom";
import './header.css';
import '../../index.css';
import { MENU } from '../../data/MENU';
// import { useState, useRef } from "react";


import Navigation from './navigation';
import MobileNavigation from './mobile_navigation';

const Header = () => {   
    
    return (
        <div className='header' data-test-id='header'>
            <Navbar />
            <section className='container-header-nav-menu'>
                <nav className='header-nav-menu'>
                    <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
                    <div className='menu' data-test-id='menu'>
                        <Navigation/>
                        <MobileNavigation/>
                    </div>
                    {/* <div className='menu' data-test-id='menu'>
                        {MENU.map(({ id, path, name }) => (
                            <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
                                <span>{name}</span>
                            </Link>
                        ))}
                    </div> */}
                    <div className='menu-nav'>
                        <img src={search} alt='img' />
                        <img src={globe} alt='img' />
                        <img src={user} alt='img' />
                        <img src={shoppingBag} alt='img' />
                    </div>          
                </nav>
            </section>            
        </div>
    )
}

export default Header;