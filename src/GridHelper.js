export function InitGridState(rows, columns) {
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

export function GetNextEvolutionState(currentGridState) {

}

export function CalculateCellState(cell, grid) {
  // 2 or 3 live neighboars to stay alive
  const neighbors = GetAllNeighbouringCells(cell, grid);

  // 3 live neighboars to become alive
  return cell;
}

export function GetAllNeighbouringCells(cell, grid) {
  const neighbors = [];
  const possibleNeighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  possibleNeighbors.forEach(pn => {
    const row = cell.rowPosition + pn[0];
    const col = cell.columnPosition + pn[1];
    const neighbor = grid.find(c => c.rowPosition === row && c.columnPosition === col);
    if (neighbor) {
      neighbors.push(neighbor);
    }
  })
  return neighbors;
}