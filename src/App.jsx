import { useState } from "react";
import { Header } from "./header/header";
import { Main } from "./main/main-component";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
