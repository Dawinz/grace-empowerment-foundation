import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import HomePage from './screens/HomePage';

function App() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <HomePage />
    </div>
  );
}

export default App;
