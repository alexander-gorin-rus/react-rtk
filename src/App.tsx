import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './modules/Layout';
import UserForm from './modules/User/UserForm';
import UserList from './modules/User/UserList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
