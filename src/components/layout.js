import * as React from 'react'
import {
  app,
  main,
  heading,
  asideNav
} from './layout.module.css'
import Navigation from './navigation'
import { StaticImage } from 'gatsby-plugin-image'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={app}>
      <aside className={asideNav}>
        <Navigation/>
      </aside>
      <main className={main}>
        <StaticImage src='../images/banner.jpg' alt="banner"/>
        <title>{pageTitle} </title>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
