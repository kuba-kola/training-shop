import React from 'react';
import './header.css';
import '../../index.css';
import NavLinks from './navLinks';

const Navigation = () => {
    return(
        <nav className="default__navigation">
            <NavLinks/>
        </nav>
    )
}

export default Navigation