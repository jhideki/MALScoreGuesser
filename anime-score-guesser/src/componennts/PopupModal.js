import React from "react";
import "../styles/PopupModal.css";

function PopupModal({ handleClose, rating, popularity, anime }) {
  return (
    <div className="popup-modal">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <h1>{anime.name}</h1>
        <p>
          Correct MAL score: {anime.score} <br />
          Your Guess: {rating}
        </p>
        <p>
          Correct MAL popularity ranking: {anime.rank} <br />
          Your Guess: {popularity}
        </p>
        <button onClick={handleClose}>Try Again!</button>
      </div>
    </div>
  );
}

export default PopupModal;
