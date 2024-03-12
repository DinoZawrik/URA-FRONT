import * as React from "react";
import { render } from "react-dom";
import "./App.scss";
import Chatbot from "./Components/Chatbot/Chatbot";

const App: React.FC = () => {
  return (
    <div className="App">
      <Chatbot />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
