import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';

function App() {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
