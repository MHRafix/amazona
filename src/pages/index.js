import { Grid } from "@mui/material";
import Product from "../../models/Products";
import LayoutContainer from "../components/common/layout/LayoutContainer";
import ProductCard from "../components/common/Product/ProductCard";
import db from "../utilities/database";
export default function Home(props) {
  const { products } = props;

  return (
    <>
      <LayoutContainer description="This is home page.">
        <Grid container>
          {products.map((product) => (
            <ProductCard key={product.name} products_data={product} />
          ))}
        </Grid>
      </LayoutContainer>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
