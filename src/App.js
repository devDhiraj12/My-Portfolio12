import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Header from "./MainComponent/Header";
import Home from "./MainComponent/Home";
import Footer from "./MainComponent/Footer";
import Admin from "./MainComponent/Admin";
import AdminTable from "./MainComponent/AdminTable";
import SignIn from "./MainComponent/SignIn";
import React, { useEffect } from "react";
import Loading from "./MainComponent/Loading";

function App() {
  const [loading, setloading] = React.useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : 
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Admin />} />
          <Route exact path="/users" element={<AdminTable />} />
          <Route exact path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
