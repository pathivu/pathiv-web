import React from 'react';
import './App.scss';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';

function App() {
  return (
    <div className="root">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
