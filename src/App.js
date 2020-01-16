import React from 'react';
import styles from './App.scss';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';

function App() {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
