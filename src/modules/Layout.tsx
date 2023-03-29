import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNav from './GlobalNav';
import Style from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <article>
        <header className={Style.header}>
            <h1>Список чеков</h1>
        </header>
        <section className={Style["content-section"]}>
            <GlobalNav />
              <main>
              <Outlet />
            </main>
          </section>
      </article>
      <ToastContainer />
    </>
  )
}

export default Layout