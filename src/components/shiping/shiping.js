import React from "react";
import "./shiping.css";
import support from "../../assets/png/support.png";
import refresh from "../../assets/png/refresh.png";
import truck from "../../assets/png/truck.png"

const Shipping = () => {  
    return (
        <section className="container-advantage">
            <div className="free-shipping">
                <div className="img-free-shipping"><img src={support} alt='img' /></div>
                <div className="text-advantage">
                    <span className="title-advantage">FREE SHIPPING</span>
                    <span className="item-advantage">On all UA order or order above $100</span>
                </div>
            </div>
            <div className="days-return">
                <div className="img-days-return"><img src={refresh} alt='img' /></div>
                <div className="text-advantage">
                    <span className="title-advantage">30 DAYS RETURN</span>
                    <span className="item-advantage">Simply return it within 30 days for an exchange</span>
                </div>
            </div>
            <div className="support">
                <div className="img-support"><img src={truck} alt='img' /></div>
                <div className="text-advantage">
                    <span className="title-advantage">SUPPORT 24/7</span>
                    <span className="item-advantage">Contact us 24 hours a day, 7 days a week</span>
                </div>
            </div>
        </section>
    )
}

export default Shipping