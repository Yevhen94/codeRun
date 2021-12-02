import React, { useState, useEffect } from "react";
import "./pagination.scss";

const Pagination = ({ links, comments, currentPage, lastPage }) => {
  let countLinks = [];
  for (let i = 1; i < links.length - 1; i++) {
    countLinks.push(links[i]);
  }

  // const [disabled, setDisabled] = useState(false);

  return (
    <>
      <nav className="pagination">
        <ul className="pagination__list">
          <li
            className={
              currentPage !== 1
                ? "pagination__item pagination__item--arrow"
                : "pagination__item pagination__item--arrow disabled-arrow"
            }
            onClick={
              currentPage !== 1
                ? () => {
                    comments(links[0].url);
                    window.scrollTo(0, 0);
                  }
                : null
            }
          >
            &laquo;
          </li>
          {countLinks.map((btnItem, index) => (
            <li
              className={
                currentPage === btnItem.label
                  ? "pagination__item active"
                  : "pagination__item"
              }
              key={index}
              onClick={() => {
                comments(btnItem.url);
                window.scrollTo(0, 0);
              }}
            >
              {btnItem.label}
            </li>
          ))}
          <li
            className={
              currentPage !== lastPage
                ? "pagination__item pagination__item--arrow"
                : "pagination__item pagination__item--arrow disabled-arrow"
            }
            onClick={
              currentPage !== lastPage
                ? () => {
                    comments(links[links.length - 1].url);
                    window.scrollTo(0, 0);
                  }
                : null
            }
          >
            &raquo;
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
