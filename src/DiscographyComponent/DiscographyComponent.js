import createElement from "../shared/components";
import { records } from "./discographyData.js";

const DiscographyComponent = props => {
  return (
    <div>
      <h1>Discography</h1>
      <div class="covers">
        {records.map(r => {
          return <img src={r.cover} class="cover" />;
        })}
      </div>
    </div>
  );
};

export default DiscographyComponent;
