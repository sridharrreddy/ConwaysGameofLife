import React, { useState } from "react";
import styled from "@emotion/styled";

import Cell from "./Cell";

function GenerateCells(columns, rows) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      grid.push(<Cell rowPosition={i} columnPosition={j} />);
    }
  }
  return grid;
}

function Grid({ columns, rows }) {
  var CellGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${columns}, 50px);
    grid-gap: 5px;
  `;
  return <CellGrid>{GenerateCells(columns, rows)}</CellGrid>;
}

export default Grid;
