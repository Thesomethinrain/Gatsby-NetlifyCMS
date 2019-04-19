import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Adresse</h1>
    <p>6 rue Saintonge - NANTES</p>
    <Link to="/">Retour Accueil</Link>
  </Layout>
)

export default AboutPage
