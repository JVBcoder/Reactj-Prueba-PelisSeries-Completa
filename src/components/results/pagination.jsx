const Pagination = ({ currentPage, totalPages, previousPage, nextPage }) => {
  return (
    <div className="pagination">
      <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

export default Pagination