import React  from "react"
import './../css/blog.scss'
import BlogHeader from "../components/blog/BlogHeader"
import BlogBody from "../components/blog/BlogBody"
import BlogFooter from "../components/blog/BlogFooter"

const Blog = () => {

  return (
    <div className="blog-outer-wrapper full-box">
      <BlogHeader/>
      <BlogBody/>
      <BlogFooter/>
    </div>
  );
}

export default Blog;