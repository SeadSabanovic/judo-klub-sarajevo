import * as React from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Contact from "./Contact"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navigation />
      <main>{children}</main>
      <Contact />
      <Footer />
    </div>
  )
}

export default Layout
