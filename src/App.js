import React from 'react';
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
