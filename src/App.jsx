import React from "react";
import "./App.css";
import SampleDesign from "./components/SampleDesign";
import Header from "./components/Header";

function App() {
  return (
    <div className=" bg-amber-50">
      <Header />
      {/* <SampleDesign /> */}
      {[...Array(100)].map((_,i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}

export default App;
