import React from 'react';
import Style from './Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChequeForm from './Cheques/ChequeForm';
import ChequesList from './Cheques/ChequesList';

const Layout = () => {
  return (
    <>
      <article>
        <header className={Style.header}>
            <h1>Список чеков</h1>
        </header>
        <section className={Style["content-section"]}>
          <ChequesList />
          {/* <ChequeForm /> */}
        </section>
      </article>
      <ToastContainer />
    </>
  )
}

export default Layout