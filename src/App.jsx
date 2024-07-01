import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/css/style.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/contact";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const GlobalData = createContext();

const App = () => {
  let [name,setName] = useState("rahul");
  let callAlert = () =>setName("Hello Rahul");
  let allData = {
    name :name,
    age : "00",
    address : "damak",
   callAlert
  }
  
  return (
    <>
      <GlobalData.Provider  value={allData} >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </GlobalData.Provider>
    </>
  );
};

export default App;
