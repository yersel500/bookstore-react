import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './App.css';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <nav className="my-nav">
        <Link to="/" className="my-logo">BookStore CMS</Link>
        <div className="link-container">
          <Link className="my-link" to="/">BOOKS</Link>
          <Link className="my-link" to="/categories">CATEGORIES</Link>
        </div>
        <Link to="/" className="my-user"><div className="user-container"><FaUser /></div></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
