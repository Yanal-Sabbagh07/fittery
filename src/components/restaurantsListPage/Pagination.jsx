import React from "react";
import { Link } from "react-router-dom";
const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalRes / props.resPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(props.resPerPage);
  console.log(props.totalRes);
  console.log(pageNumbers);
  return (
    <nav>
      <ul className="pagination-ul">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              to={`/restaurants/`}
              className="page-link"
              onClick={() => props.paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
