import React, { useState } from "react";

import "./syles/main.css";

import PageHeader from "./components/header/PageHeader";
import LinksBlock from "./components/links/LinksBlock";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <LinksBlock />
    </div>
  );
}

export default App;
