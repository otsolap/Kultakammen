import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from '../components/Landing-page/aboutme'
import Eeco from '../components/Landing-page/Eeco';
import Repository from '../components/Landing-page/repository';
import Services from '../components/Landing-page/services';
import Contact from '../components/Landing-page/contact';

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
