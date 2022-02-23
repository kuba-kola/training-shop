import React from 'react';
import { MENU } from '../../data/MENU';
import {Link} from "react-router-dom";
import './navLinks.css';
import '../../index.css';

const NavLinks = (props) => {
    return(
       
        <div>
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
       
    )
}

export default NavLinks