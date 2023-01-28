import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Popups = (props) => {
  return (props.trigger) ? (
    <div
    className="modal show"
    style={{ display: 'flex', position: 'fixed', marginTop: '10%' }}
  >
    <Modal.Dialog>
      <Modal.Header className="bg-danger" style={{ display: 'flex', justifyContent: 'center', color: 'white'}}>
        <Modal.Title>Important Information</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-danger" style={{ color: 'white', }}>
        <h3>Scent Free</h3>
        <p>Please be aware that a couple individuals have severe allergies to scents. We ask that you refrain from wearing any <em>perfume</em>, <em>cologne</em>, <em>body sprays</em>, etc. Unfortunately, strong scents can cause these individuals to end up in the hospital. People who refuse to co-operate will be asked to leave. <br />If you are unsure, please do not hesitate to contact us. <br />Thank you for your consideration. </p>
      </Modal.Body>

      <Modal.Footer className="bg-danger">
        <Button variant="dark" onClick={()=> props.setTrigger(false)}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  ) : "";
}

export default Popups