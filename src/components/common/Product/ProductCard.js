import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../../utilities/handleCart";
export default function ProductCard({ products_data }) {
  const { slug, name, image, price, countInStock } = products_data;
  const dispatch = useDispatch();

  return (
    <>
      <Grid item md={4} xs={12}>
        <Card sx={{ maxWidth: 345 }}>
          <NextLink href={`shop/${slug}`} passHref>
            <CardContent>
              <Image src={image} alt="next image" width="350" height="300" />
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography>${price}</Typography>
              <Typography>4.8 stars</Typography>
            </CardContent>
          </NextLink>
          <CardActions>
            <Button
              variant="contained"
              onClick={() =>
                handleAddToCart(products_data, countInStock, dispatch)
              }
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
