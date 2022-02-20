import React from 'react';
import './header.css';
import '../../index.css';
import NavLinks from './navLinks';
import {FcMenu} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';



const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon =  <FcMenu className='mobile__hamburger' 
                            size='24px'
                            onClick={() => {
                                setOpen(!open)
                            }}
                            />

    const closeIcon = <AiOutlineClose className='mobile__hamburger' 
                        size='24px'
                        onClick={() => {
                            setOpen(!open)
                        }}
                        />
    const closeMenu = () => setOpen(false)
    
    return(
        <nav className="mobile__navigation">
           {open ? closeIcon: hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
        </nav>
    )
}

export default MobileNavigation