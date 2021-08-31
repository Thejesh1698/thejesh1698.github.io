import React  from "react"
import './../../css/blog.scss'
import BlogHeader from "./BlogHeader"
import BlogBody from "./BlogBody"
import BlogFooter from "./BlogFooter"

const Blog = () => {

  return (
    <div className="blog-outer-wrapper full-width">
      <BlogHeader onlyNav={false}/>
      <BlogBody/>
      <BlogFooter/>
    </div>
  );
}

export default Blog;