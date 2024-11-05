import Header from '../header/header.component';
import Home from '../../router/home/home.component';
import RecipePage from '../../router/RecipePage/RecipePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
