import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './AppHeader';
import CodeforcesStat from './CodeforcesStat';
import AppFooter from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <AppHeader />
        <Routes>
          <Route path="/CPTP" element={<CodeforcesStat />} />
        </Routes>
        <AppFooter/>
      </div>
    </Router>
    
  );
};

export default App;
