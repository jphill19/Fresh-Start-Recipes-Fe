import Header from '../header/header.component';
import Home from '../../router/home/home.component';
import SubmitForm from '../submitRecipeForm/submitRecipeForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/devsubmit" element={<SubmitForm />} />
      </Routes>
    </Router>
  );
}
export default App;
