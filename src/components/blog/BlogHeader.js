import React, { useState } from "react"
import blogHeaderImage from "./../../images/blogMainPageImage.jpg"
import { errorEmojis, happyEmojis } from "../../assets/jsons/constants"

const BlogHeader = (props) => {

  return (
    <div className="blog-header-wrapper full-width">
      <div className="blog-nav-wrapper full-width">
        <div className="blog-nav full-box">
          <div className="blog-nav-logo full-height"/>
          <div className="blog-nav-button full-height" onClick={()=>{window.location = "/"}}>
            <div>Thejesh Nannapaneni</div>
          </div>
        </div>
      </div>
      {props.onlyNav ? null : <div className="blog-header full-box">
        <div className="blog-header-text full-height">
          <div className="blog-header-emoji"
               dangerouslySetInnerHTML={{__html: happyEmojis[2]}}/>
          <div>
            <div className="blog-header-title full-width">Welcome to</div>
            <div className="blog-header-title full-width">techGazes()</div>
            <div className="blog-header-tags">
              <div className="blog-header-tag tech-tag">&#60; Tech /&#62;</div>
              <div className="blog-header-tag frontend-tag">&#60; Frontend /&#62;</div>
              <div className="blog-header-tag backend-tag">&#60; Backend /&#62;</div>
            </div>
          </div>
        </div>
        <div className="blog-header-image full-height">
          <div className="full-box"/>
        </div>
      </div>}
    </div>
  );
}

export default BlogHeader;