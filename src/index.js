import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { State } from './components/State/State';
import { Student } from './components/Student/Student';
// import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <State/> */}
    <Student/>
  </React.StrictMode>
);
