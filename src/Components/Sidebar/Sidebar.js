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
            <SidebarLink to="ceremony">Ceremony</SidebarLink>
            <SidebarLink to="reception">Reception</SidebarLink>
            <SidebarLink to="accommodations">Accommodations</SidebarLink>
            <SidebarLink to="registry">Registry</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/rsvp">RSVP</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
