import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
