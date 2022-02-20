import React from 'react';
import { MENU } from '../../data/MENU';
import {Link} from "react-router-dom";
import './header.css';
import '../../index.css';

const NavLinks = (props) => {
    return(
        <section className='container-header-nav-menu'>
        <div className='menu' data-test-id='menu'>
            {MENU.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} 
                    className='menu-item' 
                    data-test-id={`menu-link-${path}`}
                    onClick= {() => props.isMobile && props.closeMenu()}
                    >
                    <span>{name}</span>
                </Link>
            ))}
        </div>
        </section> 
    )
}

export default NavLinks