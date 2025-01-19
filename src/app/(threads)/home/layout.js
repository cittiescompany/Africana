import React from "react";
import RequiredAuth from "@/components/core/shared/RequiredAuth";
import Nav from "@/components/core/shared/Nav";
import { Footer } from "@/components/core/Home/AppHero";

const layout = ({ children }) => {
  return (
    <RequiredAuth>
      <>
      <Nav />
      {children}
      <Footer/>
      </>
    </RequiredAuth>

  );
};

export default layout;
