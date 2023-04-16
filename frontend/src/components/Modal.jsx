import React from "react";
import Modal from "react-modal";

// setAppElement to root
Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginLeft: "100px",
      marginRight: "100px",
      //   marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "50px",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose(false)}
      style={customStyles}
    >
      content
    </Modal>
  );
};

export default CustomModal;
