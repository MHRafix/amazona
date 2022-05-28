import { Grid } from "@mui/material";
import React from "react";
import Product from "../../../models/Products";
import LayoutContainer from "../../components/common/layout/LayoutContainer";
import SingleProductCard from "../../components/SingleProduct/SingleProductCard";
import db from "../../utilities/database";

export default function SingleProduct(props) {
  const { product } = props;

  if (!product) {
    return <div>No product found...!</div>;
  }
  return (
    <>
      <LayoutContainer
        title="Single Product"
        description="This is single product page."
      >
        <Grid container>
          <SingleProductCard selected_product={product} />
        </Grid>
      </LayoutContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
