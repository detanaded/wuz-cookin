import React from "react";
import { HashRouter } from "react-router-dom";
import router from "./router";
import NavBar from "./Components/navbar";

function App() {
  return (
    <HashRouter>
      <NavBar/>
      {router}
    </HashRouter>
  );
}

export default App;
