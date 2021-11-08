import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import "../styles/index.scss"

import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  Collapse,
  NavLink,
} from "reactstrap"

function Header({ siteTitle }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" id="navbar">
        <NavbarBrand
          id="titleNavButton"
          className="rainbow rainbow_text_animated"
          href="/"
        >
          {siteTitle}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink id="homeNavButton" eventKey="1" href="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink id="postsNavButton" href="/postslist">
                Posts
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
