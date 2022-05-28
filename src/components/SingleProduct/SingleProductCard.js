import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../utilities/handleCart";

export default function SingleProductCard(props) {
  const { selected_product } = props;
  // destructe the properties of object
  const { name, image, price, description, countInStock } = selected_product;
  const dispatch = useDispatch();
  return (
    <>
      <Grid item md={5} xs={12}>
        <Image src={image} width="400" height="400" alt="image thumbnail" />
      </Grid>
      <Grid item md={7} xs={12}>
        <Typography>{name}</Typography>
        <Typography>{price}</Typography>
        <Typography>{description.slice(0, 50)}</Typography>
        <br />
        <Button
          variant="contained"
          onClick={() =>
            handleAddToCart(selected_product, countInStock, dispatch)
          }
        >
          Add to Cart
        </Button>
      </Grid>
    </>
  );
}
