import React from 'react';

const ResultsList = ({filterData, openPopUp}) => {
    return (
        <div className="results-grid">
        {   
        filterData.map((entry) => (
          <div key={entry.title} className="result-item" onClick={() => openPopUp(entry)}>
            <div className='result-content'>
            <h2>{entry.title}</h2>
            <img className='result-image' src={entry.images['Poster Art'].url} alt={entry.title} />
          </div>
          </div>
        ))}
      </div>
    );
}

export default ResultsList;
