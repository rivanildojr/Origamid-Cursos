import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";

import { UserStorage } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes />
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
