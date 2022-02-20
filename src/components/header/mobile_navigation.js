import React from 'react';
import './header.css';
import '../../index.css';
import NavLinks from './navLinks';

const MobileNavigation = () => {
    return(
        <nav className="mobile__navigation">
            <NavLinks/>
        </nav>
    )
}

export default MobileNavigation