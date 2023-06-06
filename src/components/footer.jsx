import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className='footer-container'>
            <div className='footer-menu'>
                <p>Home</p><p className='separator'>|</p>
                <p>Terms and Conditions </p><p className='separator'>|</p>
                <p>Privacy policy</p><p className='separator'>|</p>
                <p>(Y más elementos de menú)</p>
            </div>
            <div className='footer-copyright'>
                (Aquí iría la fila de copyrigth)
            </div>
            <div className='footer-icons'>
                <div className='icons-social-footer'>
                    (Aquí irían los iconos de Social media icons)
                </div>
                <div className='get-app-icons'>
                    (Aquí irían los iconos de Get App Icons)
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
