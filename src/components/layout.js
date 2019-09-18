import React from "react"

import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
