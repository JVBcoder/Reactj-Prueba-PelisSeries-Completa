import React from 'react';
import apple from '../../assets/store/app-store.svg';
import play from '../../assets/store/play-store.svg';
import microsoft from '../../assets/store/windows-store.svg'

const AppIcons = () => {
    return (
        <div className='get-app-icons'>
            <img src={apple} alt='Apple Store'></img>
            <img src={play} alt='Play Store'></img>
            <img src={microsoft} alt='Windows Store'></img>
        </div>
    );
}

export default AppIcons;
