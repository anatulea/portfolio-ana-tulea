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
                  <CardLink href="https://lambda-calculator-tulea.netlify.com/">Calculator</CardLink>
                  </DropdownItem>
                  <DropdownItem>
                  <CardLink href="https://ana-tulea-lambda-school-newsfeed.netlify.com/">News-Feed</CardLink>
                  </DropdownItem>
                  <DropdownItem>
                  <CardLink href="https://tulea-lambda-times.netlify.com/">Lambda Times</CardLink>
                  </DropdownItem>
                  <DropdownItem>
                  <CardLink href="https://ana-tulea-github-card.netlify.com">GitHub Card</CardLink>
                  </DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/anatulea">Contact</NavLink>
              </NavItem>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}