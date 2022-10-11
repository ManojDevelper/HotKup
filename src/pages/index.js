import React, { Fragment } from "react"
import Home from "./Home"
import SEO from "../components/seo"
import Navabar from "../components/Navbar"

const IndexPage = () => {
  return (
    <Fragment>
      <SEO
        title="Home"
        description="Gatsby is a React-based open source framework with performance, scalability and security built-in."
        keywords={["gatsby", "react"]}
      />
      <Navabar />
      <Home />
    </Fragment>
  )
}

export default IndexPage
