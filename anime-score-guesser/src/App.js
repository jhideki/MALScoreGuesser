import "./App.css";
import ReactPlayer from "react-player/youtube";
import { useState, useEffect, useRef } from "react";
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
  const [playVideo, setPlayVideo] = useState(true);

  function handleOpenModal() {
    pauseVideo();
    setShowModal(true);
  }

  function handleReset() {
    setShowModal(false);
    setRating(5);
    setPopularity(1);
    setFirstAnime();
    setPlayVideo(true);
  }

  function pauseVideo() {
    setPlayVideo(false);
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
        <h1 className="App-header">Anime MAL Score Guesser</h1>
        {anime && <h3>Current Anime: {anime.name}</h3>}
        <div className="VideoPlayer">
          {anime && <ReactPlayer url={url} playing={playVideo} />}
        </div>
        <div className="UserInput">
          <Slider
            name={"MAL score"}
            onValueChange={handleRatingChange}
            value={rating}
            min={"1"}
            max={"10"}
            step={0.01}
          />
          <Slider
            name={"Popularity Ranking"}
            onValueChange={handlePopularityChange}
            value={popularity}
            min={"1"}
            max={"20000"}
            step={1.0}
          />
          <div>
            <button onClick={handleOpenModal}>Submit Guess!</button>
            {showModal && (
              <PopupModal
                handleClose={handleReset}
                rating={rating}
                popularity={popularity}
                anime={anime}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
