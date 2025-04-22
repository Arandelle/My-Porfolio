import React from "react";
import "./App.css";
import SampleDesign from "./components/SampleDesign";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-amber-50 flex flex-col min-h-screen">
      <Header />
      <Content />
      <div className="bottom-0"><Footer /></div>
    </div>
  );
}

export default App;
