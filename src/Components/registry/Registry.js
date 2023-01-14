import React, { useState } from 'react';
import { Container, RegistryPic, RegistryH1, ImgWrapper, Img, RegistryP, RegistryBtn, RegistryBtnLink } from './RegistryElements';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import RsvpForm from '../rsvp/RsvpForm';

const Registry = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   
   <Container>
            <RegistryPic src={require('../../images/brandimatt.jpg')} alt='two people' />
            <RegistryH1>Registry</RegistryH1>
            <ImgWrapper>
            <a className="accommodationsTag" href="https://www.amazon.ca/wedding/brandi-martel-mathieu-jacques-sault-ste-marie-july-2023/registry/3KP05CJKWV1KU" target="_blank" rel="noreferrer">
            <Img src={require('../../images/amazon.png')} alt='image' />
            </a>
            <RegistryP>Click <a className="accommodationsTag" href="https://www.amazon.ca/wedding/brandi-martel-mathieu-jacques-sault-ste-marie-july-2023/registry/3KP05CJKWV1KU" target="-blank" rel="noreferrer">here</a>, or
 on the image for Brandi and Matt's Registry Page</RegistryP>
            </ImgWrapper>
            <RegistryBtn>
              <RegistryBtnLink onClick={handleShow}>RSVP</RegistryBtnLink>
            </RegistryBtn>

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

    </Container>
  )
}

export default Registry
