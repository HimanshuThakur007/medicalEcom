import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Navbar from "./Components/NavBar/Navbar";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComp from "./Components/HomePage/HomeComp";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeComp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
