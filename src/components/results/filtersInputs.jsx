import React from 'react';

const FiltersInputs = ( {filterYear, handleChange, setResultsPerPage} ) => {

    const optionSelected = '';

    const changeSelection = (e) => {
        setResultsPerPage(e.target.value)
    }

    return (
        <div className='filter-container'>
            <div>
                <label>Filtrar por año: </label>
                <input type="text" value={filterYear} onChange={handleChange} placeholder="Write a year..." />
            </div>
            <div>
                <label>Filtrar resultados: </label>
                <select value={optionSelected} onChange={changeSelection}>
                    <option></option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </div>
            
    );
}

export default FiltersInputs;
