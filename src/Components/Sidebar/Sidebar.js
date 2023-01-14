import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import RsvpForm from '../rsvp/RsvpForm';

const Sidebar = ({isOpen, toggle}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <SidebarLink to="stagDoe" onClick={toggle} >Stag and Doe</SidebarLink>
            <SideBtnWrap>
            <SidebarRoute onClick={handleShow} >RSVP</SidebarRoute>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='modalHeader text-light' closeButton>
          <Modal.Title >RSVP</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
        <small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Please submit before January 3, 3449</small>
        <div>

<Formik
  className="bookingCredentials"
  component={RsvpForm}
/>
<small className='' style={{display: "flex", justifyContent: "center", color: "white"}}>Thank you for letting us know!</small>

</div>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </SideBtnWrap>
        </SidebarMenu>
      
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
