import { useEffect, useState } from "react";
import "./PaginationComponent.css";
import { products } from "../../helpers/dummyData";
import { scrollToTop } from "../../helpers/utils";

/*============================================================
  PaginationComponent: Pagination rendering component
==============================================================*/

export default function PaginationComponent({ sendCurrentItems, sendTotalItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 15;

  const newPage = (pageNumber = 0) => {
    sendTotalItems(products.length);
    const maxPages = Math.ceil(products.length / itemsPerPage);
    let validatedPageNumber = pageNumber;
    if (pageNumber < 1) {
      validatedPageNumber = 1;
    } else if (pageNumber > maxPages && maxPages > 0) {
      validatedPageNumber = maxPages;
    } else if (maxPages === 0) {
      validatedPageNumber = 1;
    }

    setCurrentPage(validatedPageNumber);

    const indexOfLastItem = validatedPageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    sendCurrentItems(currentItems);
    scrollToTop();

    const totalPages = Math.ceil(products.length / itemsPerPage);
    setTotalPages(totalPages);
  };

  useEffect(() => {
    newPage();
  }, []);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      newPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      newPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    newPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        href="#goback"
        className="pagination-button arrow"
        disabled={currentPage === 1}
        onClick={goToPrevPage}
      >
        ❮
      </button>
      <div className="pagination-buttons">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => goToPage(number)}
            className={`pagination-button${
              currentPage === number ? " pagination-button-active" : ""
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        href="#go-ahead"
        className="pagination-button arrow"
        disabled={currentPage === totalPages}
        onClick={goToNextPage}
      >
        ❯
      </button>
    </div>
  );
}
