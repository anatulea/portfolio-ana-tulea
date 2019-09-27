import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardLink
  } from 'reactstrap';
  import styled from 'styled-components';
  // const NameLogo = styled.a `
  // font-family: 'Shadows Into Light', cursive;
  // font-weight:bold;
  // font-size:2rem;
  // color:gold;
  // `;
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          
          <NavbarBrand id="nameLogo" href="/">Ana Tulea</NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <CardLink href="https://ana-tulea-nasa-photo-of-the-day.netlify.com/">Photo Of The Day</CardLink>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}