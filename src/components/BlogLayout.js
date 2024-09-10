import * as React from 'react';
import Layout from './Layout';

function BlogLayout({ children }) {
  return (
    <Layout>
      <div className="container">
        <main>{children}</main>
        <footer id="blog-footer">
          ©
          {' '}
          {new Date().getFullYear()}
          , Built by
          {' '}
          <a href="https://www.github.com/adiela">Adiela Abishua</a>
          {'  with '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </Layout>

  );
}

export default BlogLayout;
