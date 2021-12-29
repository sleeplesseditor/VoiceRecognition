import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ColourSpinner from './components/LazyLoader/ColourSpinner';
import { ReactComponent as CaretIcon } from './components/Header/Icons/caret-down-outline.svg';
import './App.scss';

import TextDisplay from './pages/TextDisplay';
import DrawShape from './pages/DrawShape';
import LanguageOptions from './pages/LanguageOptions';

function App() {
  return (
    <Router>
      <Header navIcon={<CaretIcon />} title={'React Voice Recognition'} />
      <React.Suspense fallback={<ColourSpinner />}>
        <Routes>
          <Route exact path="/" element={<TextDisplay />} />
          <Route exact path="/shape-addition" element={<DrawShape />} />
          <Route exact path="/language" element={<LanguageOptions />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App;
