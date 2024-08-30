import * as React from "react"
import Layout from "../components/Layout"

const BlogLayout = ({ children }) => {

  return (
    <Layout>
      <div className="blog-wrapper">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Layout>
    
  )
}

export default BlogLayout