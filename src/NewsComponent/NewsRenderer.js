import createElement from "../shared/components";
import formatDate from "../shared/formatDate.js";

const NewsRenderer = (props) => {
  const { data = [] } = props;

  return (
    <div>
      <div class="news">
        {data.map((i) => {
          return (
            <a href={i.url} class="news">
              <img src={i.tileImg} class="news__img" />
              <span>{formatDate(i.date)}</span>
              <span>{i.title}</span>
              <p>{i.tileText}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NewsRenderer;
