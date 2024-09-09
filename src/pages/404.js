import * as React from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogLayout';
import Seo from '../components/seo';

function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <BlogLayout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </BlogLayout>
  );
}

export function Head() {
  return <Seo title="404: Not Found" />;
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
