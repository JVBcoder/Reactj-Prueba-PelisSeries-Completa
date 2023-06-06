import React from 'react';
import SocialMediaIcons from './socialMediaIcons';
import AppIcons from './appIcons';
import MenuFooter from './menuFooter';


const Footer = () => {
    return (
        <footer>
        <div className='footer-container'>
            <MenuFooter></MenuFooter>
            <div className='footer-copyright'>
                Copyright @2023 Demo Streaming. All Rights Reserved.
            </div>
            <div className='footer-icons'>
                <div>
                    <SocialMediaIcons></SocialMediaIcons>
                </div>
                <div>
                    <AppIcons></AppIcons>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
