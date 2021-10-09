import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock as farClock } from "@fortawesome/free-regular-svg-icons"
import { pastelColours } from "../../assets/jsons/constants"
import RocketLoader from "../Loaders/RocketLoader"
import { Link } from "gatsby"
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons"
import { faCopy, faLink } from "@fortawesome/free-solid-svg-icons"

const BlogBody = () => {

  const [blogArticles, setBlogArticles] = useState([
    {
      blogId: 1,
      blogTags: ["Frontend", "React", "JSX"],
      blogHeader: "Have you ever tried JSX Concatenation?",
      blogDescription: "You might have heard about string concatenation, html concatenation and might have even " +
        "used them atleast once but have you ever tried JSX concatenation? Do you think it would work?",
      blogDate: "28 Aug 2021"
    },
    {
      blogId: 2,
      blogTags: ["Frontend", "React", "JSX"],
      blogHeader: "Have you ever tried JSX Concatenation?",
      blogDescription: "You might have heard about string concatenation, html concatenation and might have even " +
        "used them atleast once but have you ever tried JSX concatenation? Do you think it would work?",
      blogDate: "28 Aug 2021"
    },
    {
      blogId: 3,
      blogTags: ["Frontend", "React", "JSX"],
      blogHeader: "Have you ever tried JSX Concatenation?",
      blogDescription: "You might have heard about string concatenation, html concatenation and might have even " +
        "used them atleast once but have you ever tried JSX concatenation? Do you think it would work?",
      blogDate: "28 Aug 2021"
    }
  ])

  return (
    <div className="blog-body-wrapper full-width">
      <div className="blog-body-header full-width">A quick gaze at all the posts . . .</div>
      <div className="body-left-wing">
        {blogArticles == undefined ?
          <div className="blog-body-loader full-width">
            <RocketLoader
              message={"Hold on to your seat. fetching them with rocket speed!"} />
          </div> :
          <>
            {blogArticles.map((article) => {
              return (
                <div className="blog-card" key={article.blogId}>
                  <div className="blog-card-info">
                    <div className="blog-card-tags full-width">
                      {article.blogTags.map((tag, index) => {
                        return (
                          <div className="blog-card-tag" key={article.blogId + index}
                               style={{
                                 "backgroundColor": pastelColours[(article.blogId + index) % 10].backgroundColour,
                                 "border": "1px solid " + pastelColours[(article.blogId + index) % 10].textColor
                               }}
                          >
                            {tag}
                          </div>
                        )
                      })}
                    </div>
                    <div className="blog-card-header full-width">{article.blogHeader}</div>
                    <div className="blog-card-description full-width">{article.blogDescription}</div>
                    <div className="blog-card-footer full-width">
                      <Link className="blog-card-button" to={"/blog/post/" + article.blogHeader.split(" ").join("_")}>Read
                        Full Post</Link>
                      <div className="blog-card-date"><FontAwesomeIcon icon={farClock} />&nbsp;&nbsp;{article.blogDate}
                      </div>
                    </div>
                  </div>
                  <div className="blog-card-decoration full-height" />
                </div>
              )
            })}
          </>
        }
      </div>
      {blogSocialSideBar()}
      {blogArticles.length < 5 ?
        <div className="blog-body-footer full-width">More blogs will be out soon. Stay tuned! :)</div> : null}
    </div>
  )
}

const blogSocialSideBar = () => {
  return (
    <div className="body-right-wing">
      <div className="blog-sidebar-social-wrapper">
        <div className="blog-sidebar-social full-width">
          <a><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="blog-sidebar-social full-width">
          <a><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
        <div className="blog-sidebar-social full-width">
          <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
        <div className="blog-sidebar-social full-width">
          <a><FontAwesomeIcon icon={faGoogle} /></a>
        </div>
        <div className="blog-sidebar-social full-width">
          <a><FontAwesomeIcon icon={faLink} /></a>
        </div>
      </div>
    </div>)
}

export default BlogBody