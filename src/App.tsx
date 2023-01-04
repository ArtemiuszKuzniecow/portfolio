import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <h1>Hello, World</h1>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
