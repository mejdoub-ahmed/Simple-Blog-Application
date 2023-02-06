// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
