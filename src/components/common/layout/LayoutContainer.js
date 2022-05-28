import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

export default function LayoutContainer({ children, title, description }) {
  return (
    <div className="page_main_wrapper">
      <Head>
        <title>{title ? `Amazona - ${title}` : "Amazona"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* app header is here */}
      <header>
        <HeaderNavigation />
      </header>
      {/* app body is here */}
      <main>
        <Container>{children}</Container>
      </main>

      {/* app footer is here */}
      <footer>This is footer here...!</footer>
    </div>
  );
}
