import { Grid } from "@mui/material";
import React from "react";

export default function CartToggle({ cart_products }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "90%",
          right: "10%",
          background: "#fefefe",
          color: "black",
          display: "block",
        }}
      >
        <Grid container>
          {cart_products.map((cart) => (
            <>{cart.name}</>
          ))}
        </Grid>
      </div>
    </>
  );
}
