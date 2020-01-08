import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ description, siteTitle }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link style={{ textDecoration: "none" }} to="/">
        {siteTitle}
      </Link>
    </h1>
    <h2>{description}</h2>
  </header>
)

Header.propTypes = {
  description: PropTypes.string,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  description: ``,
  siteTitle: ``,
}

export default Header
