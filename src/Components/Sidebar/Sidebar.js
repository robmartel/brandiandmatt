import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="ceremony" onClick={toggle} >Ceremony</SidebarLink>
            <SidebarLink to="reception" onClick={toggle} >Reception</SidebarLink>
            <SidebarLink to="accommodations" onClick={toggle} >Accommodations</SidebarLink>
            <SidebarLink to="registry" onClick={toggle} >Registry</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/rsvp">RSVP</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
