import createElement from "../shared/components";
import { news } from "../NewsComponent/newsData.js";
import Paginator from "../shared/Paginator/Paginator.js";
import NewsRenderer from "./NewsRenderer.js";

const NewsComponent = (props) => {
  const {
    queryStringParams: { page = 1, size = 4 },
  } = props;

  const createNewsPageUrl = (pageNumber) => {
    return `/news/?page=${pageNumber}&size=${size}`;
  };

  return (
    <div>
      <h1 class='title'>News</h1>
      {Paginator({
        pageNumber: page,
        data: news,
        pageSize: size,
        Component: NewsRenderer,
        createUrl: createNewsPageUrl,
      })}
    </div>
  );
};

export default NewsComponent;
