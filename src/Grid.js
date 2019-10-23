import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Cell from "./Cell";

function Grid({ columns, rows }) {
  function onCellClick(rowPosition, columnPosition) {
    const targetCell = gridState.find(
      cell =>
        cell.rowPosition === rowPosition &&
        cell.columnPosition === columnPosition
    );

    const updatedGridState = gridState.map(cell =>
      cell.rowPosition === targetCell.rowPosition &&
      cell.columnPosition === targetCell.columnPosition
        ? { ...targetCell, alive: !targetCell.alive }
        : cell
    );
    setGridState(updatedGridState);
  }

  const [gridState, setGridState] = useState([]);

  useEffect(() => {
    setGridState(InitGridState(columns, rows));
  }, [columns, rows]);

  function InitGridState(columns, rows) {
    const gridState = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        gridState.push({
          rowPosition: i,
          columnPosition: j,
          alive: false
        });
      }
    }
    return gridState;
  }

  var CellGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${columns}, 50px);
    grid-gap: 5px;
  `;
  return (
    <CellGrid>
      {gridState.map(cell => (
        <Cell
          key={`${cell.rowPosition}x${cell.columnPosition}`}
          rowPosition={cell.rowPosition}
          columnPosition={cell.columnPosition}
          onClick={onCellClick}
          alive={cell.alive}
        />
      ))}
    </CellGrid>
  );
}

export default Grid;
