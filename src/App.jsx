import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Shop from "../src/pages/Shop";
import Cart from "../src/pages/Cart";
import ProductDetails from "../src/pages/ProductDetails";

const id = 1;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path={`/shop/productdetails${id}`}
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
