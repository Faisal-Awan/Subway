import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
 <BrowserRouter>
  <Layout />
 </BrowserRouter>,
  document.getElementById('root')
);
