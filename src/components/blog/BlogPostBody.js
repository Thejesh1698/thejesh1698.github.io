import React, { useState } from "react"
import { errorEmojis } from "../../assets/jsons/constants"

const BlogPostBody = (props) => {

  const [postNotFound, setPostNotFound] = useState(true)

  return (
    <div className="blog-post-process full-width">
      {postNotFound ? <>
        <div className="post-notfound-title full-width">{props.blogName}?</div>
        <div className="left-wing full-height" />
        <div className="right-wing full-height">
          <div className="blog-post-emoji full-box" dangerouslySetInnerHTML={{ __html: errorEmojis[8] }} />
          <div className="blog-post-emoji-text full-box">
            Oopsy! You found them working :P<br /><br />
            These little things want to promise you that this post will be ready and live by
            <span className="font-italic"> Sept 15, 2021.</span>
            <br /><br />
            Keep visiting them before they go back to their planet :P
          </div>
        </div>
      </> : null}
    </div>
  )
}

export default BlogPostBody