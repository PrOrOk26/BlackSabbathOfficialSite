import createElement from "../components.js";
import PaginatorControl from "./PaginatorControl.js";

const Paginator = props => {

  const {
    pageNumber,
    pageSize = 6,
    data = [],
    showPages = 5,
    Component
  } = props;

  const pageAmount = Math.ceil(data.length / pageSize);

  const filterData = (data, pageSize, pageNumber) => {
    const start = (+pageNumber - 1) * +pageSize;
    const end = start + +pageSize < data.length ? start + +pageSize : data.length;
    return data.slice(start, end);
  };

  return (
    <div>
      {PaginatorControl({...props, pageNumber: +pageNumber, showPages: +showPages, pageAmount: +pageAmount})}
      {Component({data: filterData(data, pageSize, pageNumber)})}
      {PaginatorControl({...props, pageNumber: +pageNumber, showPages: +showPages, pageAmount: +pageAmount})}
    </div>
  );
};

export default Paginator;
