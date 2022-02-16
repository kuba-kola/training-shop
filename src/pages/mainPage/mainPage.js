import React from "react";
import Main from '../../components/main/main';
import Shiping from "../../components/shiping/shiping";
import CardsItem from "../../components/cards_item/cards_item";
import News from "../../components/news/news";
import Subscribe from "../../components/subscribe/subscribe";
import Blog from "../../components/blog/blog";

const MainPage = () => {
    return (
        <>
            <Main />
            <Shiping />
            <CardsItem />
            <News />
            <Subscribe /> 
            <Blog />
        </>
    )
}
export default MainPage