import React from "react";
import blog1 from "../../assets/img/blog-1.jpg";
import blog2 from "../../assets/img/blog-2.jpg";


import './blog.css'

function Blog() {
  return (
    <div className="group-66">
      <div className="flex-col">
        <div className="latest-from-blogvalign-text-middlespartan-semi-bold-licorice-22px">
          LATEST FROM BLOG
        </div>
        <div className="rectangle1">
          <img src={blog1} alt='img'/>          
          <span className="theEasiestWayToBreak">THE EASIEST WAY TO BREAK</span>
        </div>
      </div>
      <Property1Default4
        rectangle1="rectangle-1-17.jpg"
        theEasiestWayToBreak="WEDDING SEASON"
        className="article-box-1"
      />
      <div className="flex-col-1">
        <div className="see-allspartan-medium-licorice-12px">
          SEE ALL
        </div>
        <Property1Default4
          rectangle1="rectangle-1-18.jpg"
          theEasiestWayToBreak="RECENT FAVORITES ON REPEAT"
          className="article-box-2"
        />
      </div>
    </div>
  );
}

export default Blog;

function Property1Default4(props) {
  const { rectangle1, theEasiestWayToBreak, className } = props;

  return (
    <div className={`article-box ${className || ""}`}>
      <div className="overlap-group">
      <img src={blog2} alt='img'/>
        <div className="group-116">
          <p className="the-easiest-way-to-breakspartan-semi-bold-licorice-14px">
            {theEasiestWayToBreak}
          </p>
          <p className="but-i-must-explain-tbody-1422">
            But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor
          </p>
          <div className="flex-row">
            <div className="datespartan-normal-licorice-12px">
              April 6, 2022
            </div>
            <div className="read-morespartan-semi-bold-licorice-12px">
              READ MORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}