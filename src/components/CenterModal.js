import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Card.css'

function CenterModal(props) {
    let imageUrl;

    // Check if card is multi-faced and use the front side image
    if (props.cardobj.card_faces && props.cardobj.card_faces.length > 0) {
        imageUrl = props.cardobj.card_faces[0].image_uris.border_crop;
    } else if (props.cardobj.image_uris) {
        imageUrl = props.cardobj.image_uris.border_crop;
    } else {
        // Handle the case where no image is available
        imageUrl = 'defaultImageUrl';
    }

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
                <img className='modal-image' src={imageUrl} alt="Card" />
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-primary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CenterModal;