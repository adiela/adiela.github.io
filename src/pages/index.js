import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SocialLinks from '../components/SocialLinks';
import Layout from '../components/Layout';
import IconEnvelope from '../components/icons/IconEnvelope';
import ContactForm from '../components/ContactForm';

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
            <a href="/adiela_abishua_resume.pdf" className="button float-right">View Resume</a>
          </div>
        </section>
        <section id="skills">
          <h2 className="heading-1 section-header">My Tech Stack</h2>
          <ul className="skills-list">
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" className="devicon" /></li>
            <li className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" alt="Rabbit MQ" className="devicon" /></li>
          </ul>
        </section>
        <section id="projects">
          <h2 className="heading-1 section-header projects-header">Projects</h2>
          Comming soon! Currently updating portfolio projects.
        </section>
        <section id="contact">
          <header id="contact-header">
            <h1 className="heading-1">Get in touch</h1>
            <a className="contact-form-link" href="mailto:adiela.abishua@gmail.com">
              <IconEnvelope />
              adielaabishua@gmail.com
            </a>
          </header>
          <ContactForm />
        </section>
      </main>
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
