import React from "react";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routing(): any {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/checkout" element={<Checkout />} />;
      </Routes>
    </BrowserRouter>
  );
}
