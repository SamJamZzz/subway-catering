import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import SchoolLunch from "./components/SchoolLunch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
               element={<Home />}
        />
        <Route path="/school-lunch"
               element={<SchoolLunch />}
        />
        <Route path="/contact-us-subway"
               element={<Contact />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
