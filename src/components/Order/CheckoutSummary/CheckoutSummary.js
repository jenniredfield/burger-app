import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";

const checkoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope its good!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.cancelHandler}>
        CANCEL
      </Button>
      <Button btnType="Proceed" clicked={props.continueHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
