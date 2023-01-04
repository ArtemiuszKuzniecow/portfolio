import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="ml-80">
        <h1>Hello, World</h1>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
