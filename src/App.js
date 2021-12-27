import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LazyLoader from './components/LazyLoader/LazyLoader';
import { ReactComponent as CaretIcon } from './components/Header/Icons/caret-down-outline.svg';
import './App.scss';

import TextDisplay from './pages/TextDisplay';
import DrawShape from './pages/DrawShape';
import LanguageOptions from './pages/LanguageOptions';

// const TextDisplayPage = React.lazy(() => import('./pages/TextDisplay'));

function App() {
  return (
    <Router>
      <Header navIcon={<CaretIcon />} title={'React Voice Recognition'} />
      <Routes>
        <Route exact path="/" element={<TextDisplay />} />
        <Route exact path="/shape-addition" element={<DrawShape />} />
        <Route exact path="/language" element={<LanguageOptions />} />
      </Routes>
    </Router>
  )
}

export default App;
