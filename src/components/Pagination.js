import React from 'react'
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const maxPageButtons = 20; 
  const pageNumbers = [];

  if (nPages <= maxPageButtons) {

    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    const endPage = Math.min(startPage + maxPageButtons - 1, nPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ul className='character-pagination'>
      <li>
        <a className={`page-button ${currentPage === 1 ? 'disabled' : ''}`} onClick={handlePrevPage}>
          Prev
        </a>
      </li>
      {pageNumbers.map((pgNumber) => (
        <li key={pgNumber}>
          <a className={`page-button ${currentPage === pgNumber ? 'active' : ''}`} onClick={() => setCurrentPage(pgNumber)}>
            {pgNumber}
          </a>
        </li>
      ))}
      <li>
        <a className={`page-button ${currentPage === nPages ? 'disabled' : ''}`} onClick={handleNextPage}>
          Next
        </a>
      </li>
    </ul>
  );
};



 


export default Pagination
