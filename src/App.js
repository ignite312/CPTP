import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Header';
import Home from './Components/Home';
import Footer from './Footer'
import CfStat from './CodeforcesStat/CfStat'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/CPTP" element={<CfStat />} />
            <Route path="/CPTP/Home" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
