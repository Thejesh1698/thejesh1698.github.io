import React from "react"
import { Router } from "@reach/router"
import BlogLanding from "../components/blog/BlogLanding"
import BlogPost from "../components/blog/BlogPost"

const Blog = () => (
  <Router>
    <BlogLanding path="/blog/" />
    <BlogPost path="/blog/:name/" />
  </Router>
)
export default Blog
