import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className='Toolbar'>
        <DrawerToggle click={props.toggleSideDrawer}/>
        <div className="Toolbar__logo-wrapper">
        <Logo/>
        </div>
        <nav className="DesktopOnly"><NavigationItems/></nav>
    </header>
);

export default toolbar;
