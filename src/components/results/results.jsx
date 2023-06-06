import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import ResultsList from './resultsList';
import Popup from './popup';
import FiltersInputs from './filtersInputs';
import Pagination from './pagination';

const Results = ({ programType }) => {
  const url =
    'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
  const { data, loading, error } = useFetch(url)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [filterYear, setFilterYear] = useState('')
  const [resultsPerPage, setResultsPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (data) {
      setCurrentPage(1)
    }
  }, [data, resultsPerPage]);

  const openPopUp = (entry) => {
    setSelectedEntry(entry)
  };

  const closePopUp = () => {
    setSelectedEntry(null)
  };

  const handleChange = (event) => {
    setFilterYear(event.target.value)
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  if (loading) {
    return <div className='container'><p>Loading...</p></div>
  }

  if (error) {
    return <p>Oops, something went wrong: {error.message}</p>
  }

  if (!data) {
    return null;
  }

  const filterData = data.entries
    .filter(
      (entry) =>
        entry.releaseYear >= 2010 &&
        entry.programType === programType &&
        entry.releaseYear.toString().includes(filterYear)
    )
    .slice(0, 20)
    .sort((a, b) => a.title.localeCompare(b.title))

  const totalPages = Math.ceil(filterData.length / parseInt(resultsPerPage))
  const indexFirst = (currentPage - 1) * parseInt(resultsPerPage)
  const indexLast = indexFirst + parseInt(resultsPerPage)
  const paginatedData = filterData.slice(indexFirst, indexLast)

  return (
    <div className='container'>
      <FiltersInputs
        filterYear={filterYear}
        handleChange={handleChange}
        setResultsPerPage={setResultsPerPage}
      ></FiltersInputs>
      <ResultsList filterData={paginatedData} openPopUp={openPopUp}></ResultsList>
      {selectedEntry && <Popup selectedEntry={selectedEntry} closePopUp={closePopUp}></Popup>}
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}>            
        </Pagination>
    </div>
  );
};

export default Results;
