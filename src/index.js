import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Grid from "./Grid";

function App() {
  return <Grid columns={5} rows={4} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
