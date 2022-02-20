import React from 'react';
import { MENU } from '../../data/MENU';
import {Link} from "react-router-dom";
import './header.css';
import '../../index.css';

const NavLinks = () => {
    return(
        <div className='menu' data-test-id='menu'>
            {MENU.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    )
}

export default NavLinks