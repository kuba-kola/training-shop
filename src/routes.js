import React from "react";
import {Routes, Route, Router} from "react-router-dom";
import MainPage from "./pages/main_page/mainPage";
import ProductsPage from "./pages/products_page/products_page"



export const UseRoutes = isLogin => {
    if(isLogin) {
        return(
            <Router>
                <Routes>
                    <Route path = '/' element={<MainPage/>} />                 
                    <Route path = '/men' element={<ProductsPage/>} />                
                    {/* <Route path = '/message/:id' element={<MessagePage/>} />                 */}
                </Routes>
            </Router> 
        )
    }

    return(
        <Router>
            <Routes>
                <MainPage/>      
            </Routes>
        </Router>
    )
}