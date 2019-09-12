import React from "react";
import APOD from "./components/APOD.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <APOD />
    </div>
  );
}

export default App;
