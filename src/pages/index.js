import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SocialLinks from '../components/SocialLinks';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <main className="container">
        <section id="about-section">
          <div className="column1">
            <StaticImage src="../images/adiela_abishua.jpg" alt="Personal Image" className="avatar" quality={100} />
            <SocialLinks />
          </div>
          <div className="column2">
            <span className="greeting">Hi there, I'm</span>
            <h1 className="heading-1 font-xl">Adiela Abishua</h1>
            <h2 className="sub-heading">Full-Stack Software Engineer</h2>
            <p id="bio">I am a software engineer with over 5 years of professional experience in building both B2C and B2B software. I am passionate about the use of technology in solving real world problems. I build software that is performant, and user friendly.</p>
            <a href="/resume.pdf" className="button float-right">View Resume</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
