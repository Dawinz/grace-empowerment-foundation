import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import ProjectsPage from './components/Projects';
import NavbarComponent from './components/Navbar.jsx';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
