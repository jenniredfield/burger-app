import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {


    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
                )
            });

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price} </strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Cancel' clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType='Proceed' clicked={this.props.purchaseContinued}>Proceed</Button>
            </Aux>
        )
    }
}

export default OrderSummary;