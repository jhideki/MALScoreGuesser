import React from "react";
import "../styles/PopupModal.css";

function PopupModal({ handleClose }) {
  return (
    <div className="popup-modal">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <p>This is a popup modal!</p>
      </div>
    </div>
  );
}

export default PopupModal;
