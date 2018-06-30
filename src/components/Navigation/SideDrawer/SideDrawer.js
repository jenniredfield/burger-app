import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import './SideDrawer.css';

const sideDrawer = (props) => {
    // ...conditionally add CSS classes 
    let attachedClasses = ['SideDrawer', 'Closed'];

    if(props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="SideDrawer__logo-wrapper">
                    <Logo />
                </div>
                <nav className="SideDrawer__nav">
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;