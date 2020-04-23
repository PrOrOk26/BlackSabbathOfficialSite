import createElement from "../shared/components";
import { records } from "./discographyData.js";

const DiscographyComponent = (props) => {
  return (
    <div>
      <h1>Discography</h1>
      <div class="covers">
        {records.map((r) => {
          return (
            <a href={r.url} class="cover-link">
              <img src={r.cover} class="cover-link__img" />
              <div class="cover-link__hover">
                <p class="h-strong">{r.name}</p>
                <p class="h-strong">{r.dateReleased.getFullYear()}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DiscographyComponent;
