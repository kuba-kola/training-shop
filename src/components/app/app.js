import React from 'react';
// import { Route } from 'react-router-dom';
import Header from "../header/header";
import {MainPage} from "../../pages/main_page/mainPage";

import './app.css';
import Shipping from '../shiping/shiping';
import ProductsPage from '../../pages/products_page/products_page';
import Footer from '../footer/footer';
import News from '../news/news'
import Subscribe from '../subscribe/subscribe'
import Blog from '../blog/blog'

function App() {
  return (
    <div className='app' datd-test-id='app'>
        <div className='App-wrapper'>
            <Header />
            <MainPage />
            <Shipping/>
            <ProductsPage/>
            <News/>
            <Subscribe/>
            <Blog/>
            <Footer/>

        </div>
    </div>
  );
}

export default App;
