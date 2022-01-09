import React from "react";

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
            <a
              href="#"
              className="page-link"
              onClick={() => props.paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
