import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNavbarRow from "./TopNavbarRow"; // Import your TopNavbarRow or other components
import HomePage from "./HomePage"; // Import other components/pages as needed

const App = () => {
  return (
    <Router>
      {/* Apply the white background to the entire website */}
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <TopNavbarRow />

        {/* Your other components/pages */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
