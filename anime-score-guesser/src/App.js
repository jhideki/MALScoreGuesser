import "./App.css";
import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import getClip from "./utils/GetClip";
import throttle from "lodash.throttle";
import Slider from "./componennts/Slider";
import PopupModal from "./componennts/PopupModal";

function App() {
  const [anime, setAnime] = useState(null);
  const [url, setUrl] = useState(null);
  const throttledGetClip = throttle(getClip, 5000);
  const [popularity, setPopularity] = useState(0);
  const [rating, setRating] = useState(5);
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  async function setFirstAnime() {
    const clip = await throttledGetClip();
    setAnime(clip);
  }

  function setVidUrl(videoId) {
    setUrl(`https://www.youtube.com/watch?v=${videoId}`);
  }

  useEffect(() => {
    setFirstAnime();
  }, []);

  useEffect(() => {
    if (anime) {
      setVidUrl(anime.videoId);
    }
  }, [anime]);

  function handlePopularityChange(newValue) {
    setPopularity(newValue);
  }

  function handleRatingChange(newValue) {
    setRating(newValue);
  }

  return (
    <div className="App">
      <div className="GameContainer">
        <header className="App-header">Anime MAL Score Guesser</header>
        <div className="VideoPlayer">
          {anime && <ReactPlayer url={url} playing={true} />}
        </div>
        <div className="UserInput">
          <Slider
            name={"MAL score"}
            onChange={handleRatingChange}
            min={"1"}
            max={"10"}
            step={0.01}
          />
          <Slider
            name={"Popularity Ranking"}
            onChange={handlePopularityChange}
            min={"1"}
            max={"20000"}
            step={1.0}
          />
          <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            {showModal && <PopupModal handleClose={handleCloseModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
