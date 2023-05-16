import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Card.css'

function CenterModal(props){

    console.log(props.cardobj)
    // console.log(props.cardobj.image_uris.normal)

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
             {props.cardobj.name}
            </Modal.Title>
            <Button className='btn-primary' onClick={props.onHide}>Close</Button>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            <img className='modal-image' src={props.image}/>
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-primary' onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default CenterModal