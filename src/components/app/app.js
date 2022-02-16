import React from 'react';
import Header  from "../header/header";
import MainPage from "../../pages/mainPage/mainPage";
import ProductsPage from "../../pages/products_page/products_page";
import ProductPage from "../../pages/product_page/product_page";
import Footer  from "../footer/footer";
import { Route, Routes } from 'react-router-dom'

import './app.css';

const App = () => {

  return (
    <section className='app-wrapper' >
        <div className='app' data-test-id='app'>        
          <Header /> 
          <Routes>
              <Route path='/' element={<MainPage />} exact />
              <Route path='/women' element={<ProductsPage page={"Women"} />} exact />
              <Route path='/men' element={<ProductsPage page={"Men"} />} exact />
              <Route path='/men/:id' element={<ProductPage page={"Men"} />} expect />
              <Route path='/women/:id' element={<ProductPage page={"Women"} />} expect />
          </Routes>
          <Footer />
        </div>
    </section> 
  );
}

export default App;
