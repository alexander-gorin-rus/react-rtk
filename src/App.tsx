import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChequesList from "./modules/Cheques/ChequesList";
import Layout from "./modules/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChequesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
