import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <> 
         <h1>App JS Gan</h1>

         <nav>
            <Link to="/expenses">Expenses</Link> 
            <Link to="/invoices">Invoices</Link> | {" "}
         </nav>

         <Outlet/>         {/* buat single page appl */}
      </>
  )
}

export default App;


