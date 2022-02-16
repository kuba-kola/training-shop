import React from "react";
import { Link } from "react-router-dom";
import ProductHeader from "../../components/product_header/product_header";
import { CLOTHESPROD } from "../../data/CLOTHES_PROD";
import stars from '../../assets/png/stars.png';

import arrowTop from '../../assets/png/arrow-top.png';
import arrowBottom from '../../assets/png/arrow-bottom.png';
import arrowLeft from '../../assets/png/arrow-left.png';
import arrowRight from '../../assets/png/arrow-right.png';
import img1 from "../../assets/img/prod/1.png";
import img2 from "../../assets/img/prod/2.png";
import img3 from "../../assets/img/prod/3.png";
import img4 from "../../assets/img/prod/4.png";
import color1 from "../../assets/img/prod/color-1.png";
import color2 from "../../assets/img/prod/color-2.png";
import color3 from "../../assets/img/prod/color-3.png";
import color4 from "../../assets/img/prod/color-4.png";
import hanger from "../../assets/img/prod/hanger.png";
import heart from "../../assets/img/prod/heart.png";
import scale from "../../assets/img/prod/scale.png";
import pay from "../../assets/img/prod/pay.png";
import annotation from "../../assets/img/prod/annotation.png";
import car from "../../assets/png/car2.png";
import arrowsCircle from "../../assets/png/arrows-circle2.png";
import mail from "../../assets/png/mail.png";

import "./product_page.css";


const ProductPage = (page) => {
    const pages = page.page;
    const productType = pages.toLowerCase();
    const pageType = page.page + ` ► ${page.page}'s tracksuit Q109`;
    
    return (
        <section className="page-product"  data-test-id={`product-page-${productType}`}>
            <ProductHeader page={pageType} />
            <div className='wrapper-page-products_title'>
                <div className='products-page_title'>{`${page.page}'s tracksuit Q109`}</div>
            </div>
            <div className="wrapper-rating">
                <div><img src={stars} alt="stars" /><span>2 Reviews</span></div>
                <div className="wrapper-rating_availability">
                    <span>SKU:</span><span className="text">777</span>
                    <span>Availability:</span><span className="text">In Stock</span>
                </div>
            </div>
            <div className="wrapper-product-information">
                <div className="product-information-img">
                    <div className="product-information-review">
                        <div className="product-information-btn">
                            <button><img src={arrowTop} alt='img' /></button>
                            <button><img src={arrowBottom} alt='img' /></button>
                        </div>
                        <img src={img1} alt='img' className="img"/>
                        <img src={img2} alt='img' className="img"/>
                        <img src={img3} alt='img' className="img"/>
                        <img src={img4} alt='img' className="img"/>
                    </div>
                    <div className='product-information-main-img'>
                        <div className='main-img'>
                            <div className='arrow-circle-left'><img src={arrowLeft} alt='img' /></div>
                            <div className='arrow-circle-right'><img src={arrowRight} alt='img' /></div>
                        </div>             
                    </div>
                </div>
                <div className="product-information-information">
                    <div className="product-information-color">
                        <div><span className="text">COLOR:</span><span className="text1">Blue</span></div>
                        <div className="product-information-color-img">
                            <img src={color1} alt='img' />
                            <img src={color2} alt='img' />
                            <img src={color3} alt='img' />
                            <img src={color4} alt='img' />
                        </div>
                    </div>
                    <div className="product-information-size">
                        <div><span className="text">SIZE:</span><span className="text1">S</span></div>
                        <div className="product-information-size-btn">
                            <button>XS</button>
                            <button style={{border: '2px solid black'}}>S</button>
                            <button>M</button>
                            <button>L</button>
                        </div>
                        <button className="button"><img src={hanger} alt='img' /><span>  Size guide</span></button>
                        <div className="product-information-price">
                            <span>$ 379.99</span>
                            <button>ADD TO CARD</button>
                            <img src={heart} alt='img' />
                            <img src={scale} alt='img' />
                        </div>
                        
                        <div className="product-information-services">
                            <div>
                                <img src={car} alt='img' />
                                <span>  Shipping & Delivery</span>
                            </div>
                            <div>
                                <img src={arrowsCircle} alt='img' />
                                <span>  Returns & Exchanges</span>
                            </div>
                            <div>
                                <img src={mail} alt='img' />
                                <span>  Ask a question</span>
                            </div>
                        </div>

                        <div className="product-information-pay">
                            <span className="title">GUARANTEED SAFE CHECKOUT</span>
                            <img src={pay} alt='img' />
                        </div>
                        <div className="product-information-description">
                            <button>DESCRIPTION</button>
                        </div>
                        <div className="product-information-additional">
                            <span className="title">ADDITIONAL INFORMATION</span>
                            <span className="text1">Color:</span>
                            <span className="text">Blue, White, Black, Grey</span>
                            <span className="text1">Size:</span>
                            <span className="text">XS, S, M, L</span>
                            <span className="text1">Material:</span>
                            <span className="text">100% Polyester</span>
                        </div>
                        <div className="product-information-reviews">
                            <span className="title">REVIEWS</span>
                            <div className="reviews-rating">
                                <div><img src={stars} alt="stars" /><span>2 Reviews</span></div>
                                <div><img src={annotation} alt="stars" /><span>Write a review</span></div>
                            </div>
                            <div className="reviews-rating2">
                                <div><span className="text1">Oleh Chabanov</span></div>
                                <div><span className="text">3 months ago </span><img src={stars} alt="stars" /></div>
                            </div>
                            <div className="reviews-rating2-text">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</div>
                            <div className="reviews-rating2">
                                <div><span className="text1">ShAmAn design</span></div>
                                <div><span className="text">3 months ago </span><img src={stars} alt="stars" /></div>
                            </div>
                            <div className="reviews-rating2-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <span className="title">RELATED PRODUCTS</span>
                <div className="related-products-btn">
                    <button><img src={arrowLeft} alt='img' /></button>
                    <button><img src={arrowRight} alt='img' /></button>
                </div>
            </div>
            <div className="related-products-card">
                
            {CLOTHESPROD.map(({id, name, price, img, category}) => (

                <Link 
                    to={`/${category}/${id}`} 
                    key={`${category}${id}`} 
                    className="cards-item" 
                    data-test-id={`clothes-card-${category}`}>
                        
                        <div className="wrapper-card-product">
                            <div className="card-product-img"><img src={img} alt="img" /></div>
                            <span className="card-product-name">{name}</span>
                            <div className="wrapper-card-product-price-starts">
                                <span className="card-product-price">{price}</span>
                                <img src={stars} alt="stars" />
                            </div>
                        </div>
                </Link>
            ))}
            </div>
            
        </section>
    )
}

export default ProductPage