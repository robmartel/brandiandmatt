import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to="/">Logo</NavLogo>
            {/*   <img src="" alt="" /> */}
            <MobileIcon>
                <FaBars />
            </MobileIcon>
        <NavMenu>
            <NavItem>
            <NavLinks to="ceremony" activeStyle>Ceremony</NavLinks>
            <NavLinks to="/reception" activeStyle>Reception</NavLinks>
            <NavLinks to="/accommodations" activeStyle>Accommodations</NavLinks>
            <NavLinks to="/registry" activeStyle>registry</NavLinks>
            </NavItem>
        </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to="rsvp">RSVP</NavBtnLink>
        </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar
