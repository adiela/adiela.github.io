import * as React from "react"
import SocialLinks from "../components/SocialLinks"
import Layout from "../components/Layout"
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
   <Layout>
    <main className="container">
      <section id="about-section">
        <div className="column1">
          <StaticImage src="../images/adiela_abishua.jpg" alt="Personal Image" className="avatar" quality={100}/>
          <SocialLinks/>
        </div>
        <div className="column2">
          <p className="heading-3">Hi there, I'm</p>
          <h1 className="heading-1 font-xl">Adiela Abishua</h1>
          <h2 className="heading-2">Full-Stack Software Engineer</h2>
          <p id="bio">I am a software engineer with over 5 years of professional experience. I have built B2C and  B2B software. I am passionate about the use of technology in solving real world problems.</p>
        <a href="/resume.pdf" className="button float-right">View Resume</a> 
        </div>
      </section>
    </main>
   </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
