import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactUsPage from './components/ContactUsPage';
import ProjectsHomepage from './components/ProjectsHomepage';

const App = () => {
  return (
    <Routes>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactUsPage} />
          <Route path="/projects" component={ProjectsHomepage} />
        </Switch>
      </Layout>
    </Routes>
  );
};

export default App;
