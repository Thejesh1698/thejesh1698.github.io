import React  from "react"
import './../../css/blogPost.scss'
import BlogHeader from "./BlogHeader"
import BlogFooter from "./BlogFooter"
import BlogPostBody from "./BlogPostBody"

const BlogPost = (props) => {

  return (
    <div className="blog-post-wrapper full-width">
      <BlogHeader onlyNav={true}/>
      <BlogPostBody blogName={props.name}/>
      <BlogFooter/>
    </div>
  );
}

export default BlogPost;