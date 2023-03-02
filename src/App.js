import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Header from "./MainComponent/Header";
import Home from "./MainComponent/Home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Home/>
      {/* <Routes>
      <Route exact path="/" component={Home} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
