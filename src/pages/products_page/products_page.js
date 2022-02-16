import React from 'react';
import CardProduct from "../../components/cards/cards";
import ProductHeader from "../../components/product_header/product_header";
import filter from "../../assets/png/filter.png";
import viewGrid from "../../assets/png/view-grid.png";
import viewList from "../../assets/png/view-list.png";
import squareLoading from "../../assets/png/square-loading.png";

import "./products_page.css";

const ProductsPage = (page) => {

    const typePage = page.page;
    const typePageUpper = typePage.toUpperCase();
    const productType  = typePage.toLowerCase();
    
    
    return (
        <section className='products-page' data-test-id={`products-page-${productType}`}>

            <ProductHeader page={typePage} />        
            <div className='wrapper-products-page_title'>
                <div className='products-page_title'>{typePageUpper}</div>
            </div>            
            <div className='products-page_filters'>
                <div className='products-page_filter'><img src={filter} alt='img'/>FILTER</div>
                <div className='products-page_view'>
                    <button><img src={viewList} alt='img'/></button>
                    <button><img src={viewGrid} alt='img'/></button>
                </div>
                <div className='products-page_select'>
                    <select>
                        <option value='bestsellers'>BESTSELLERS</option>
                        <option value='bestseller'>BESTSELLERS</option>
                        <option value='bestselle'>BESTSELLERS</option>
                    </select>
                </div>
            </div>
            <div className='products-page_card-product'>
                <CardProduct productType={productType} />
            </div>
            <div className='products-page_loading'><img src={squareLoading} alt='img' /></div>

        </section>
    )
}

export default ProductsPage