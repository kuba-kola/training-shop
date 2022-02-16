import React from "react";
import share from "../../assets/png/share.png";

import "../../pages/products_page/products_page.css";

const ProductHeader = (page) => {
    const typePage = page.page;

    return (
        <div className='wrapper-products-page-nav'>
            <div className='products-page-nav'>
                <div className='products-page-nav_page'><span>Home</span> ► {typePage}</div>
                <div className='products-page-nav_share'><img src={share} alt='img'/>Share</div>
            </div>
        </div>
    )
}

export default ProductHeader