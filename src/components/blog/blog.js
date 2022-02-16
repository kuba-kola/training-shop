import React from "react";

import "./blog.css";

const Blog = () => {
    return (
        <section className="container-blog">
            <div className="blog-title">
                <span className="title">LATEST FROM BLOG</span>
                <button>SEE ALL</button>
            </div>
            <div className="blog-img">
                <div className="img1">                    
                    <div className="blog-text">
                        <span className="text">The Easiest Way to Break</span>
                        <span className="text1">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
                <div className="img2">
                    <div className="blog-text">
                        <span className="text">Wedding Season</span>
                        <span className="text1">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
                <div className="img3">
                    <div className="blog-text">
                        <span className="text">Recent Favorites On Repeat</span>
                        <span className="text1">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog