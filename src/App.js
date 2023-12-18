import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import AboutUsPage from './components/About';
import CarouselComponent from './components/Carousel';
import ContactPage from './components/ContactUs';
import NavbarComponent from './components/Navbar';
import ObjectivesAndImageLayout from './components/Objectives';
import SlogansCardsSection from './components/Slogans';
import TopNavbarRow from './components/Topinfo';
import WhoWeAreComponent from './components/WhoWeAre';
import ContactUs from './screens/ContactUs';

function App() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <TopNavbarRow />
      <NavbarComponent />
      <CarouselComponent />
      <SlogansCardsSection />
      <WhoWeAreComponent />
      <ObjectivesAndImageLayout />
      <ContactUs />
      <AboutUsPage />
      <ContactPage />
    </div>
  );
}

export default App;
