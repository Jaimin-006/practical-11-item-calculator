import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between font-sans">
        <div>
          <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-4xl mx-auto px-6 py-3.5 flex justify-between items-center">
              <span className="font-semibold text-lg text-white">TechCorp Portal</span>
              <div className="space-x-5 text-sm font-medium">
                <Link to="/" className="hover:text-blue-200 transition">Home</Link>
                <Link to="/about" className="hover:text-blue-200 transition">About</Link>
                <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
              </div>
            </div>
          </nav>

          <main className="max-w-3xl mx-auto p-6 mt-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <footer className="text-center text-xs text-slate-500 py-4 border-t border-slate-200 bg-white">
          Practical 11: React Router Navigation Demo
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
