import * as React from 'react';
import Layout from './Layout';

function BlogLayout({ children }) {
  return (
    <Layout>
      <div id="blog-wrapper" className="container">
        <main>{children}</main>
      </div>
    </Layout>

  );
}

export default BlogLayout;
