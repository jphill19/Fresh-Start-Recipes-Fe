import Header from '../header/header.component';
import Home from '../../router/home/home.component';
import Location from '../../router/location/location.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/location" element={<Location/>} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
