import React from "react";
import facebook from "../../assets/png/facebook.png";
import twitter from "../../assets/png/twitter.png";
import instagram from "../../assets/png/instagram.png";
import pinterest from "../../assets/png/pinterest.png";
import mail from "../../assets/png/mail.png";
import tel from "../../assets/png/tel.png";
import stripe from "../../assets/png/stripe_x42.png";
import aes256 from "../../assets/png/AES256_x42.png";
import paypal from "../../assets/png/paypal_2_x42.png";
import visa from "../../assets/png/visa_x42.png";
import mastercard from "../../assets/png/mastercard_x42.png";
import discover from "../../assets/png/discover_x42.png";
import american_express from "../../assets/png/american-express_x42.png";

import './footer.css'


// const Footer = () => {
//     return(
//        <div className="container-be-in-touch">
//             <div className="be-in-touch text-middle">
//                 <span>BE IN TOUCH WITH US:</span>
//             </div>
//             <div className="rectangle-28">
//                 <div className="enter-your-emailvalign-text-middle">
//                 <span>Enter your email</span>
//                 </div>
//             </div>
        
//              <div className="rectangle-29">
//                 <div className="join-usvalign-text-middle">
//                      <span>JOIN US</span>
//                 </div>
//              </div>
//              <div className='group-1'>
//                     <a href="#"><img src={facebook} alt='img'/></a>
//                     <a href="#"><img src={twitter} alt='img'/></a>
//                     <a href="#"><img src={instagram} alt='img'/></a>
//                     <a href="#"><img src={pinterest} alt='img'/></a>
//                 </div>
//        </div>
//     )
// }

// export default Footer

function App() {
    return <Footer {...footerData} />;
  }
  
  export default App;
  
  function Footer(props) {
    const {
      beInTouchWithUs,
      enterYourEmail,
      joinUs,
      contactUs,
      phone,
      infoClevertecRu,
      copyright2022EducationalProject,      
      clevertecRuTraining,
      group511Props,
      group512Props,
      group513Props,
      group461Props,
      group462Props,
    } = props;
  
    return (
      <div className="footer">
        <div className="overlap-group2spartan-semi-bold-white-12px">
          <p className="be-in-touch-with-usvalign-text-middle">
            {beInTouchWithUs}
          </p>
          <div className="group-69">
            <div className="overlap-group">
              <div className="enter-your-emailvalign-text-middle">
                {enterYourEmail}
              </div>
            </div>
            <div className="overlap-group1">
              <div className="join-usvalign-text-middle">
                {joinUs}
              </div>
            </div>
          </div>
          <img className="group-1" src="group-1-1.svg" />
        </div>
        <div className="group-container">
          <Group51
            categories={group511Props.categories}
            menWomenAccessoriesBeauty={group511Props.menWomenAccessoriesBeauty}
          />
          <Group51
            categories={group512Props.categories}
            menWomenAccessoriesBeauty={group512Props.menWomenAccessoriesBeauty}
            className={group512Props.className}
          />
          <Group51
            categories={group513Props.categories}
            menWomenAccessoriesBeauty={group513Props.menWomenAccessoriesBeauty}
            className={group513Props.className}
          />
          <div className="group-48">
            <div className="contact-usvalign-text-middlespartan-semi-bold-licorice-12px">
              {contactUs}
            </div>
            <Group46 belarusGomelLange17={group461Props.belarusGomelLange17} />
            <div className="group-45">
            <img src={tel} alt='img'/>
              <p className="phonespartan-normal-licorice-12px">
                {phone}
              </p>
            </div>
            <Group46 belarusGomelLange17={group462Props.belarusGomelLange17} />
            <div className="group-44">
              <img src={mail} alt='img'/>
              <div className="infoclevertecru">
                {infoClevertecRu}
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group-1small-1118">
          
          <div className="rectangle-24">
            <p className="copyright-2022-educational-project">
              {copyright2022EducationalProject}
            </p>
            <img className="stripe" src={stripe} alt='img'/>
            <img className="aes256" src={aes256} alt='img'/>             
            <img className="paypal" src={paypal} alt='img'/> 
            <img className="visa" src={visa} alt='img'/> 
            <img className="mastercard" src={mastercard} alt='img'/> 
            <img className="discover" src={discover} alt='img'/> 
            <img className="american-express" src={american_express} alt='img'/>
            <div className="clevertecrutraining">
              {clevertecRuTraining}
            </div>             
          </div>          
        </div>
      </div>
    );
  }
  
  function Group51(props) {
    const { categories, menWomenAccessoriesBeauty, className } = props;
  
    return (
      <div className={`group-51 ${className || ""}`}>
        <div className="categoriesvalign-text-middlespartan-semi-bold-licorice-12px">
          {categories}
        </div>
        <div className="men-women-accessories-beautyspartan-normal-licorice-12px">
          {menWomenAccessoriesBeauty}
        </div>
      </div>
    );
  }
  
  function Group46(props) {
    const { belarusGomelLange17 } = props;
  
    return (
      <div className="group-4">
        <img className="location-marker-1" src="location-marker-1.svg" />
        <div className="belarus-gomel-lange-17spartan-normal-licorice-12px">
          {belarusGomelLange17}
        </div>
      </div>
    );
  }
  
  const group511Data = {
    categories: "CATEGORIES",
    menWomenAccessoriesBeauty: (
      <>
        Men
        <br />
        Women
        <br />
        Accessories
        <br />
        Beauty
      </>
    ),
  };
  
  const group512Data = {
    categories: "INFOMATION",
    menWomenAccessoriesBeauty: (
      <>
        About Us
        <br />
        Contact Us
        <br />
        Blog
        <br />
        FAQs
      </>
    ),
    className: "group",
  };
  
  const group513Data = {
    categories: "USEFUL LINKS",
    menWomenAccessoriesBeauty: (
      <>
        Terms &amp; Conditions
        <br />
        Returns &amp; Exchanges
        <br />
        Shipping &amp; Delivery
        <br />
        Privacy Policy
      </>
    ),
    className: "group",
  };
  
  const group461Data = {
    belarusGomelLange17: "Belarus, Gomel, Lange 17",
  };
  
  const group462Data = {
    belarusGomelLange17: "All week 24/7",
  };
  
  const footerData = {
    beInTouchWithUs: "BE IN TOUCH WITH US:",
    enterYourEmail: "Enter your email",
    joinUs: "JOIN US",
    contactUs: "CONTACT US",
    phone: "+375 29 100 20 30",
    infoClevertecRu: "info@clevertec.ru",
    copyright2022EducationalProject: "Copyright © 2032 all rights reserved",
    stripe_X42: "stripe-x42.png",
    aes256_X42: "aes256-x42.png",
    paypal_2_X42: "paypal-2-x42.png",
    visa_X42: "visa-x42.png",
    mastercard_X42: "mastercard-x42.png",
    discover_X42: "discover-x42.png",
    americanExpress_X42: "american-express-x42.png",
    clevertecRuTraining: "Clevertec.ru/training",
    group511Props: group511Data,
    group512Props: group512Data,
    group513Props: group513Data,
    group461Props: group461Data,
    group462Props: group462Data,
  };