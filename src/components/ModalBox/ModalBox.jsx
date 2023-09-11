import React from "react";
import Modal from "react-bootstrap/Modal";
const ModalBox = ({ show, onHide, title, content }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalBox;
