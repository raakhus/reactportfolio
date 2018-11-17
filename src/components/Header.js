import React from 'react';
import {
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';


export default class Header extends React.Component {
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
<Col className="d-flex justify-content-center text-align-center">
        <Navbar  light expand="md">
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/contact">Contact Me</NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/portfolio">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
        </Navbar>
        </Col>
      </div>
    );
  }
}