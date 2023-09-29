import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Components/Header";

function App() {
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
