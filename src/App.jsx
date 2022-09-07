import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Routes/Home";
import ProductDetail from "./components/Routes/ProductDetail";
import Login from "./components/Routes/Login";
import Purchases from "./components/Routes/Purchases";
import Header from "./components/shared/Header";
import Search from "./components/shared/Search";
import axios from "axios";
import Cart from "./components/shared/Cart";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";

function App() {
  
 
   


  return (
    <div className="App">
      <Header />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoutes />}>

          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
