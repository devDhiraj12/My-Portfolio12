import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Header from "./MainComponent/Header";
import Home from "./MainComponent/Home";
import Footer from "./MainComponent/Footer";
import Admin from "./MainComponent/Admin";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    

      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/admin" element={<Admin/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
