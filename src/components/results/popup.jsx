import React from 'react';

const Popup = ( {selectedEntry, closePopUp} ) => {


    return (
        <div className={`popup  ${selectedEntry ? 'open' : ''}`}>
            <h2>{selectedEntry.title}</h2>
            <p>{selectedEntry.releaseYear}</p>
            <p>{selectedEntry.description}</p>
            <img src={selectedEntry.images['Poster Art'].url} alt={selectedEntry.title} />
            <button onClick={closePopUp}>Close</button>
        </div>
    );
}

export default Popup;
