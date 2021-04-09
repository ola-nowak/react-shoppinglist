import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="ui-nav">
        <Typography style={{ padding: 16 }} variant="h4">
          <ShoppingBasketIcon style={{ paddingRight: 16 }} />
          Lista zakupów
        </Typography>
      </nav>
    </>
  );
}
