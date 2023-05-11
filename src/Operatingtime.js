import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime({ workingTime }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>

            <ListGroup.Item variant="primary">Monday {workingTime.Monday}</ListGroup.Item>
            <ListGroup.Item variant="secondary">Tuesday {workingTime.Tuesday}</ListGroup.Item>
            <ListGroup.Item variant="success">Wednesday {workingTime.Wednesday}</ListGroup.Item>
            <ListGroup.Item variant="danger">Thursday {workingTime.Thursday}</ListGroup.Item>
            <ListGroup.Item variant="warning">Friday {workingTime.Friday}</ListGroup.Item>
            <ListGroup.Item variant="info">Saturday {workingTime.Saturday}</ListGroup.Item>
            <ListGroup.Item variant="light">Sunday {workingTime.Sunday}</ListGroup.Item>

          </ListGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Operatingtime