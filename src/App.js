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
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={Admin}/>
    </Routes>
     */}

      <Routes>
      <Route exact path="/" component={<Home/>} />
      <Route exact path="/admin" component={<Admin/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
