import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Header';
import Home from './Components/Home';
import Footer from './Footer'
import CfStat from './CodeforcesStat/CfStat'


function App() {
  return (
    <Router basename="/CPTP">
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<CfStat />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
