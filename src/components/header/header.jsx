import React, { useEffect, useState } from 'react';

const Header = () => {

    const path = window.location.pathname
    const [newTitle, setNewTitle] = useState("")

    useEffect(() => {
        if (path === '/movies') setNewTitle("Movies")
        else if (path === '/series') setNewTitle("Series")
        else setNewTitle ("Titles")
    }, [path]);

    return (
        <header>
            <div className='header-up'>
                <div className='logo'>
                    <a href='/'><h1>DEMO Streaming</h1></a>
                </div>
                <div className='header-buttons'>
                    <button className='login-button'>Login</button>
                    <button className='freetrial-button'>Start your free trial</button>
            </div>
            </div>
            <div className='header-down'>
                <h1>Popular {newTitle}</h1>
            </div>
        </header>
    );
}

export default Header;
