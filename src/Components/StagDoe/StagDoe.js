import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { animateScroll as scroll } from 'react-scroll';

const StagDoe = () => {

  const toggleHome = ({toggle}) => {
    scroll.scrollToTop();
  }

  return (
    <>
    <div className='stagWrapper'>
        <h1 className='stagPageTitle'>Stag and Doe</h1>
    <Card className='stagContainer' >
      <Card.Img className='stagImg' variant="top" src= {require("../../images/beast.png")} />
      <Card.Body className='stagBody'>
        <Card.Title className="stagTitle">The Moose Lodge</Card.Title>
        <Card.Text>
          Come and support Brandi and Matt to celebrate their marriage. There will be a dj, full dinner, tons of auction items, games and of course booze!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span className='stagItems' >Date:</span> June 10, 2023</ListGroup.Item>
        <ListGroup.Item><span className='stagItems' >Time:</span> 5 p.m. - 1 a.m.</ListGroup.Item>
        <ListGroup.Item><span className='stagItems' >Location:</span> The Moose Lodge, 543 Trunk Rd, Sault Ste. Marie</ListGroup.Item>
        <ListGroup.Item><span className='stagItems' >Menu:</span> Spaghetti, meatballs, and salad</ListGroup.Item>
        <ListGroup.Item><span className='stagItems' >Music:</span> 360 Entertainment</ListGroup.Item>
        <ListGroup.Item><span className='stagItems' >Price:</span> $30 (includes meal) or a support ticket for $20</ListGroup.Item>
        <ListGroup.Item><span className='stagItems' >Contact:</span> To get tickets contact: Jenny Martel 705-942-5418</ListGroup.Item>



      </ListGroup>
      <Card.Body className='stagLinksBody'>
        <Card.Link className='stagLink' href="/brandiandmatt/" onClick={toggleHome}>Home</Card.Link>
        {/* <Card.Link className='stagLink' href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default StagDoe;


