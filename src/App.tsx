import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import ChequesList from './modules/Cheques/ChequesList';
import Layout from './modules/Layout';
import UserForm from './modules/User/UserForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ChequesList />} />
          <Route path="/add" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
