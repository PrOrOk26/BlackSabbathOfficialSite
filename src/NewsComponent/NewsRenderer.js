import createElement from "../shared/components";
import formatDate from "../shared/formatDate.js";

const NewsRenderer = (props) => {
  const { data = [] } = props;

  return (
    <div>
      <div class="news-grid">
        {data.map((i) => {
          return (
            <div class="news-article">
              <div class="news-image">
                <a href={i.url} class="news-link">
                  <img src={i.tileImg} class="news-img" />
                </a>
              </div>
              <div class="news-info">
                <h4 class="news-title">{formatDate(i.date)}</h4>
                <a href={i.url} class="news-link">
                  {i.title}
                </a>
                <p class="news-thumb-text">{i.tileText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsRenderer;
