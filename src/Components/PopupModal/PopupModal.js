import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

const PopupModal = ({
    content,
    header = '',
    buttonClass = '',
    buttonText = '',
    modalSize = 'lg',
    buttonStyle = {},
    isVerticallyCentered = false
}) => {

    const [show, setshow] = useState(false)
    const [componentToRender, setcomponentToRender] = useState(content)

    const closeModal = () => setshow(false)

    const showModal = () => setshow(true)

    return (
        <div>
            <Modal size={modalSize} centered={isVerticallyCentered} show={show} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title> {header} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {componentToRender}
                </Modal.Body>
            </Modal>
            <button style={buttonStyle} className={buttonClass} onClick={showModal}>
                {buttonText}
            </button>
        </div>
    )
}

export default PopupModal
