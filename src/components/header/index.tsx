import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="font-fancy p-2 text-5xl text-black bg-primary">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
