import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
function ContactusModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>         

            <Modal show={props.showModal} onHide={props.setShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thanks for reaching Out. We will get back to you as soon as we can!!!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.setShowModal}>
                        Close
          </Button>
                    
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default ContactusModal
