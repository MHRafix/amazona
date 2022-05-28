import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartToggle from "../ToggleModals/CartToggleView/CartToggle";

export default function HeaderNavigation() {
  const [toggleOn, setToggleOn] = useState(false);

  const cart_list = useSelector((state) => state.cart_product.cart_list);
  return (
    <AppBar position="relative">
      <Toolbar>
        <Container>
          <Grid container>
            <Grid item md={4}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                LOGO
              </Typography>
            </Grid>
            <Grid item md={8} sx={{ textAlign: "right" }}>
              <Typography
                onClick={() => setToggleOn(toggleOn ? false : true)}
                component="body1"
                variant="body1"
                sx={{ margin: "0px 10px" }}
              >
                <span style={{ position: "relative", cursor: "pointer" }}>
                  <span
                    style={{
                      position: "absolute",
                      right: "-15px",
                      bottom: "-15px",
                      fontSize: "15px",
                      background: "orange",
                      padding: "0px 5px",
                      borderRadius: "100px",
                      colors: "black",
                    }}
                  >
                    {cart_list.length}
                  </span>
                  Cart
                </span>
              </Typography>
              {toggleOn && <CartToggle cart_products={cart_list} />}
              <Typography
                component="body1"
                variant="body1"
                sx={{ margin: "0px 10px" }}
              >
                <NextLink href="/login" passHref>
                  Login
                </NextLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
