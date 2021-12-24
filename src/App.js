import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import { ReactComponent as CaretIcon } from './components/Header/Icons/caret-back-outline.svg';
import './App.scss';

import TextDisplay from './pages/TextDisplay';

// const TextDisplayPage = React.lazy(() => import('./pages/TextDisplay'));

function App() {
  return (
    <Router>
      <Header navIcon={<CaretIcon />} title={'React Voice Recognition'} />
      <Routes>
        <Route exact path="/" element={<TextDisplay />} />
      </Routes>
    </Router>
  )
}

export default App;
