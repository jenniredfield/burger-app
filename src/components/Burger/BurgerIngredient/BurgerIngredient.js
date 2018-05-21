import React from 'react';
import './BurgerIngredient.css';

const burgerIngredient = (props) => {   

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='BreadBottom'></div>;
            break;
            case ('bread-top'):
            ingredient = <div className='BreadBottom'></div>;
            break;
    }

};

export default burgerIngredient;