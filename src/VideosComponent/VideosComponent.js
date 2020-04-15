import createElement from "../shared/components.js";
import { videos } from "./videosData.js";

const VideosComponent = (props) => {
  const showModal = (e) => {
    const videoModal = document.body.getElementsByClassName("video-modal")[0];
    document.body.classList.add("overflow--hidden");
    videoModal.classList.add("video-modal--show");
  };

  const hideModal = (e) => {
    const videoModal = document.body.getElementsByClassName("video-modal")[0];
    const videoPlayer = document.body.getElementsByClassName("video-player")[0];

    document.body.classList.remove("overflow--hidden");
    videoModal.classList.remove("video-modal--show");
    videoPlayer.src = "";
  };

  const setupVideoModal = (e, src) => {
    const videoPlayer = document.body.getElementsByClassName("video-player")[0];
    videoPlayer.src = src;
  };

  const test = (
    <div>
      <h1 class="title">Videos</h1>
      <div class="video-modal" onclick={hideModal}>
        <div class="video-overlay">
          <div class="overlay-inner">
            <iframe
              class="video-player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>
          <div class="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="videos-grid">
        {videos.map((v) => {
          return (
            <img
              class="thumbnail"
              onclick={(e) => {
                setupVideoModal(e, v.url);
                showModal(e);
              }}
              src={v.thumbnail}
              alt="Video thumbnail"
            ></img>
          );
        })}
      </div>
    </div>
  );

  debugger;
  return test;
};

export default VideosComponent;
