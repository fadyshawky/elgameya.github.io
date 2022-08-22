import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
