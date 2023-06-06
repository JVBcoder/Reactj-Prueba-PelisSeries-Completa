import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import ResultsList from './resultsList';

const Results = ({programType}) => {

    const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
    const { data, loading, error } = useFetch(url)
    const [selectedEntry, setSelectedEntry] = useState(null)
    const [filterYear, setFilterYear] = useState('')

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Oops, something went wrong: {error.message}</p>
    }

    if (!data) {
        return null;
    }

    const filterData = data.entries.filter(
        (entry) => entry.releaseYear >= 2010 && entry.programType === programType 
        && entry.releaseYear.toString().includes(filterYear))
        .slice(0, 20).sort((a, b) => a.title.localeCompare(b.title)) 

    const openPopUp = (entry) => {
        setSelectedEntry(entry)
    }

    const closePopUp = () => {
        setSelectedEntry(null)
    }

    const handleChange = (event) => {
        setFilterYear(event.target.value)
    }

    return (       
    <div className='container'>
        <div className='filter-container'>
            <label>Filtrar por año: </label>
            <input type="text" value={filterYear} onChange={handleChange} placeholder="Write a year..." />
        </div>

        <ResultsList filterData={filterData} openPopUp={openPopUp}></ResultsList>

        { selectedEntry && 
        <div className={`popup  ${selectedEntry ? 'open' : ''}`}>
            <h2>{selectedEntry.title}</h2>
            <p>{selectedEntry.releaseYear}</p>
            <p>{selectedEntry.description}</p>
            <img src={selectedEntry.images['Poster Art'].url} alt={selectedEntry.title} />
            <button onClick={closePopUp}>Close</button>
      </div>
        }
    </div>
    );
}

export default Results;
