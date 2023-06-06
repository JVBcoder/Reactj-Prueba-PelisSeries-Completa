import React from 'react';
import facebook from '../../assets/social/facebook-white.svg'
import twitter from '../../assets/social/twitter-white.svg';
import instagram from '../../assets/social/instagram-white.svg';

const SocialMediaIcons = () => {
    return (
        <div className='icons-social-footer'>
        <img src={facebook} alt='Facebook'></img>
        <img src={twitter} alt='Twitter'></img>
        <img src={instagram} alt='Instagram'></img>    
        </div>
    );
}

export default SocialMediaIcons;
