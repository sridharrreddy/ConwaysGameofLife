import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import Cell from "./Cell";
import { InitGridState } from './GridHelper';

function Grid({ columns, rows, isEvolving }) {
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

  const evolutionTimer = useRef(null);

  useEffect(() => {
    if (isEvolving) {
      evolutionTimer.current = setInterval(() => {
        
      }, 500);
    } else {
      clearInterval(evolutionTimer.current);
    }
  }, [isEvolving]);

  const [gridState, setGridState] = useState(InitGridState(rows, columns));

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
