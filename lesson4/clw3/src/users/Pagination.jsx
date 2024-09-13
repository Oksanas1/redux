import React, { useState, useEffect } from "react";

const Pagination = ({goPrev, goNext, totalItems, currentPage, itemPerPage}) => {
  const [isPrevPageAvaible, setIsPrevPageAvaible] = useState(currentPage > 1);
  const [isNextPageAvaible, setIsNextPageAvaible] = useState(true);

  useEffect(() => {
    setIsPrevPageAvaible(currentPage > 1);
    setIsNextPageAvaible(totalItems - itemPerPage > 2);
  }, [currentPage, itemPerPage]);

  return (
    <div className="pagination">
      {isPrevPageAvaible && <button className="btn" onClick={goPrev}>←</button>}
      <span className="pagination__page">{currentPage}</span>
      {isNextPageAvaible && <button className="btn" onClick={goNext}>→</button>}
    </div>
  );
};

export default Pagination;