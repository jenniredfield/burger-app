import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toobar, SideDrawer, Backdrop</div>
        <main className='layout__content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;