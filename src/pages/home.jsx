import React from 'react';
import placeholder from '../assets/placeholder.png'

const Home = () => {

    return (
        <div className='container'>
            <div className='home'>
                <a href='/series'>
                    <div>
                        <div className='placeholder'>
                            <img src={placeholder} alt='Ir a Series'></img>    
                            <h1>SERIES</h1>
                        </div>
                        <p>Popular Series</p>
                    </div>
                </a>
                <a href='/movies'>
                    <div>
                        <div className='placeholder'>
                            <img src={placeholder} alt='Ir a Películas'></img>    
                            <h1>MOVIES</h1>
                        </div>
                        <p>Popular Movies</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Home;
