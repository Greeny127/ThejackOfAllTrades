import * as React from "react"
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

const Header = ({ siteTitle }) => (
  <div>
    <Navbar color="dark" dark expand="md" fixed="top" id="navbar">
      <NavbarBrand
        id="titleNavButton"
        className="rainbow rainbow_text_animated"
        href="/"
      >
        {siteTitle}
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink id="homeNavButton" href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id="postsNavButton" href="/postslist">
              Posts
            </NavLink>
          </NavItem>
          {/* <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav id="optionsNavButton">
              Options
            </DropdownToggle>
            <DropdownMenu right id="dropdownNavMenu">
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
