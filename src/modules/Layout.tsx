import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNav from './GlobalNav';
import Style from './Layout.module.css'

const Layout = () => {
  return (
    <article>
        <header className={Style.header}>
            <h1>sdsds</h1>
        </header>
        <section className={Style["content-section"]}>
            <GlobalNav />
            <main>
                <Outlet />
            </main>
        </section>
    </article>
  )
}

export default Layout