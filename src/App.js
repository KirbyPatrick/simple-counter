import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Appheader from "./components/appheader";

function App() {
  return (
    <div className="App">
      <Appheader />
      <Counter />
    </div>
  );
}

export default App;
