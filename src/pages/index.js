import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Let us rock and roll :)</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    something exiciting is waiting <Link to="/page-2/">here</Link>
    <p> on Sprint 4" </p>
    <div><p>Version: %%VERSION_NUMBER%%</p></div>
  </Layout>
)

export default IndexPage
