import AboutPage from './AboutPage';
import ContactMe from './ContactMe';
import MainPage from './MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import Award from './Award';
import PortfolioDetails from './PortfolioDetails';
import AwardsDetails from './AwardsDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactMe/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/portfolio_details/:id" element={<PortfolioDetails/>} />
          <Route path="/awards" element={<Award/>} />
          <Route path="/awards_details/:id" element={<AwardsDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
