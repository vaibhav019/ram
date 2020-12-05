import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Form,
  Input
} from 'reactstrap';
//import Icon from '@material-ui/core/Icon';



  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" style={{display:"block",backgroundColor:"gray",width:150}}>Logo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
              <Form>
            <Input type="email" name="email" id="search-box" placeholder="search here" className="ml-sm-100" style={{width:1000 ,borderRadius:20 }} />
            </Form>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Header;