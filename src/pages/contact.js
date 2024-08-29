import * as React from "react"
import SocialLinks from "../components/SocialLinks"
import Layout from "../components/Layout"


const ContactPage = () => {
  return (
    <Layout>
        <main id="contact-section" className="container">
            <header id="contact-header">
                <h1 className="heading-1 font-l">Get in touch</h1>
                <p>
                    Feel free to connect with me on social media on any of the platforms linked below.
                </p>
                <SocialLinks/>
            </header>
            <form>
                <input type="text" name="name" placeholder="Enter your name" />
                <input type="text" name="email" placeholder="Enter your email" />
                <textarea type="text" name="message" placeholder="Type your message here" rows="10" />
                <input type="button" value="Send" />
            </form>
        </main>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <title>Contact Page</title>
