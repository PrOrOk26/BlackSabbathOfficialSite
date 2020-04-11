import createElement from "../components.js";
import range from "../range.js";

const PaginatorControl = (props) => {
  const { pageNumber, showPages, createUrl, pageAmount } = props;

  const calculateDisplayedPageRange = (pageNumber, showPages, pageAmount) => {
    const start = pageNumber % showPages ? pageNumber - (pageNumber % showPages) + 1 : pageNumber - showPages + 1;
    const end = start + showPages - 1;

    return [start, end < +pageAmount ? end : +pageAmount];
  };

  const createPaginatorElement = () => {
    const [start, end] = calculateDisplayedPageRange(pageNumber, showPages, pageAmount);

    const pageElements = [];

    if (start > showPages) {
      pageElements.push(
        <li class="page-previous">
          <a
            class="page-previous"
            href={createUrl(pageNumber - 1)}
            title={`Go to page number: ${pageNumber - 1}`}
          >
          </a>
        </li>
      );
    }

    for (let i of range(start, end + 1)) {
      pageElements.push(
        <li class={+i === +pageNumber && "page-current"}>
          <a
            href={createUrl(i)}
            title={`Go to page number: ${i}`}
          >
            {i}
          </a>
        </li>
      );
    }

    if (end + 1 <= pageAmount) {
      pageElements.push(
        <li>
          <a class="page-next"
            href={createUrl(pageNumber + 1)}
            title={`Go to page number: ${pageNumber + 1}`}
          >
          </a>
        </li>
      );
    }
    
    return pageElements;
  };

  return (
    <div>
      <div class="paginator-control">
        <ul>{createPaginatorElement()}</ul>
      </div>
    </div>
  );
};

export default PaginatorControl;
