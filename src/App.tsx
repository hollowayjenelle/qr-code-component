import React from "react";
import Card from "./components/Card";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Card />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by Jenelle Holloway
      </div>
    </div>
  );
};

export default App;
