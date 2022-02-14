import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Expenses from "./Expenses" ; 
import Invoice from './Invoice';

ReactDOM.render(
  <BrowserRouter> 
    <React.StrictMode>
      <Routes> 
          {/* <Route path='/' element={<App/>} />
          <Route path='expenses' element={<Expenses/>} />
          <Route path='invoices' element={<Invoice/>}/> */}

          <Route path="/" element={<App/>}> 
              <Route path='expenses' element={<Expenses/>} />
              <Route path='invoices' element={<Invoice/>} />
              <Route
                 path="*"
                 element={ 
                    <main>
                        <p> There's nothing here!</p>
                    </main>
                 } 
               > {/* Route like switch jika tidak ada yang mengisi atau component seperti nnti 404 page {no match} */}
                  
              </Route>
          </Route> {/* Buat single page application */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

