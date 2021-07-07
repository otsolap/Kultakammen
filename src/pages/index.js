import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from '../components/aboutme'
import Eeco from '../components/Eeco';
import Repository from '../components/repository';
import Services from '../components/services';
import Contact from '../components/contact';

const Home = () => {

  return (
    <Layout>
      <SEO />
      <AboutMe />
      <Eeco />
      <Repository />
      <Services />
      <Contact />
    </Layout>
  )
}

export default Home;
