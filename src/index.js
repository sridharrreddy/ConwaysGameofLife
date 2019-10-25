import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import "./styles.css";
import Grid from "./Grid";

function App() {
  const [isEvolving, setIsEvolving] = useState(false);

  function evolutionStalled() {
    setIsEvolving(false);
  }

  return (
    <React.Fragment>
      <Grid columns={5} rows={4} isEvolving={isEvolving} evolutionStalled={evolutionStalled} />
      <br />
      <Button
        variant="contained"
        color="primary"
        endIcon={isEvolving ? <PauseIcon /> : <PlayArrowIcon />}
        onClick={() => setIsEvolving(!isEvolving)}
      >
      {isEvolving ? 'Pause' : 'Play'}
      </Button>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
