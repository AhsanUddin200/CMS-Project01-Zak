import './App.css';
import Nav from './Components/nav';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
//import Signin from './components/Signin'
import CompanyInfo from './Components/companyinfo';
import StaffInfo from './Components/Staffinfo';
import Dashboard from './Components/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  // Paths where Nav and Footer should not be shown
  const hideNavFooterPaths = ['/dashboard'];

  const shouldHideNavFooter = hideNavFooterPaths.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideNavFooter && <Nav />}
      <Routes>
        <Route path="/companyinfo" element={<CompanyInfo />} />
        <Route path="/staffinfo" element={<StaffInfo />} />
        <Route path="/update" element={<h3>Update product component</h3>} />
        <Route path="/logout" element={<h4>Logout</h4>} />
        <Route path="/profile" element={<h5>User Profile </h5>} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      {!shouldHideNavFooter && <Footer />}
    </div>
  );
}

export default App;
