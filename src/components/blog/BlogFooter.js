import React  from "react"

const BlogFooter = () => {

  return (
    <div className="blog-footer-wrapper full-width">
      <div className="blog-footer full-width">
        <div className="full-height">
          <div className="full-height">
            <div className="blog-footer-name full-box">
              techGlazes()
              <div>Don't just be a developer. Be a good one!</div>
            </div>
            <div className="blog-footer-links full-box">
              <div>
                <h3 className="full-width">Links</h3>
                <a className="full-width" href="/">Portfolio</a>
                <a className="full-width" href="/blog">Blog</a>
              </div>
            </div>
            <div className="blog-footer-social full-box">
              <div>
                <h3 className="full-width">Follow</h3>
                <a className="full-width" href="https://www.linkedin.com/in/nannapaneni-thejesh-820346132/">LinkedIn</a>
                <a className="full-width" href="https://github.com/Thejesh1698">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-footer-copyright full-width">Copyright © 2021 | techGlazes() | All rights reserved.</div>
    </div>
  );
}

export default BlogFooter;