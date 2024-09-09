import * as React from 'react';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <main className="container">
        Comming soon! Currently updating portfolio projects.
      </main>
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
