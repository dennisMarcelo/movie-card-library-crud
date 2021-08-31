import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
