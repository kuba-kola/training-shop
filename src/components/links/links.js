import React from "react";
import facebook from "../../assets/png/facebook.png";
import twitter from "../../assets/png/twitter.png";
import instagram from "../../assets/png/instagram.png";
import pinterest from "../../assets/png/pinterest.png";

import "./links.css";

const Links = () => {
    return (
        <div className='top-bar_social-networks'>
            <a href="#"><img src={facebook} alt='img'/></a>
            <a href="#"><img src={twitter} alt='img'/></a>
            <a href="#"><img src={instagram} alt='img'/></a>
            <a href="#"><img src={pinterest} alt='img'/></a>
        </div>
    )
}
export default Links