import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <main style={pageStyles}>
        <title>Not found</title>
        <Link to="/">Go home</Link>.
      </main>
    </Layout>
  )
}

export default NotFoundPage
