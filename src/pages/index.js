import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://www.gatsbyjs.com/static/b79cb66545b144295a8c6a5efeaafb20/94cea/localhost-new-site.png"
      />
    </Layout>
  )
}

export default IndexPage
