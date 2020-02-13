import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';
import Config from './containers/Config';

function App() {
  return (
    <div className="root">
      <Config />
      <Sidebar />
      <Content />
      <ToastContainer />
    </div>
  );
}

export default App;
