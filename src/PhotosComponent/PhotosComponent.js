import createElement from "../shared/components.js";
import { photos } from "./photosData.js";

const PhotosComponent = (props) => {
  const showModal = (e) => {
    const modal = document.body.getElementsByClassName("photos-modal")[0];
    document.body.classList.add("overflow--hidden");
    modal.classList.add("photos-modal--show");
  };

  const hideModal = (e) => {
    const modal = document.body.getElementsByClassName("photos-modal")[0];
    const modalImage = document.body.getElementsByClassName("modal-photo")[0];

    document.body.classList.remove("overflow--hidden");
    modal.classList.remove("photos-modal--show");
    modalImage.src = "";
  };

  const setupModal = (e, src) => {
    const modalImage = document.body.getElementsByClassName("modal-photo")[0];
    modalImage.src = src;
  };

  return (
    <div>
      <h1 class="title">Photos</h1>
      <div class="photos-modal" onclick={hideModal}>
        <div class="photos-overlay">
          <div class="overlay-inner">
            <img class="modal-photo" src="" alt=""></img>
          </div>
          <div class="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="photos-grid">
        {photos.map((v) => {
          return (
            <img
              class="thumbnail"
              onclick={(e) => {
                setupModal(e, v.url);
                showModal(e);
              }}
              src={v.url}
              alt="Photo thumbnail"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default PhotosComponent;
