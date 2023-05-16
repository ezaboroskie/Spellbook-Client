import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Card.css'

function RandomModal (props){

    console.log(props)
   

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className='modal-body'>
            <img className='modal-image' src={props.image}/>
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-primary' onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default RandomModal