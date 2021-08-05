import React, { useState } from "react";
import Start from "./components/start/start";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  const [start, setStart] = useState(true);

  window.onload = () => {
    setTimeout(() => setStart(false), 23500);
  };

  return (
    <>
      {start ? (
        <Start />
      ) : (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
