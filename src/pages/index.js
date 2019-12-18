import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"


export const pageQuery = graphql`
 {
  wordPress {
    pageBy(uri: "home page") {
      title
      date
    }
  }
}
`

const Home = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

export default Home


