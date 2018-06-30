import React from 'react';
import './Logo.css';

import burgerLogo from '../assets/burger-logo.png';

const logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo} alt="Burger"/>
    </div>
);

export default logo;