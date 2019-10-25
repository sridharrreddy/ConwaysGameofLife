import { InitGridState, GetAllNeighbouringCells, EvolveCell } from '../GridHelper';

describe('Get neighboring cells', () => {
  test('returns 0 neighboring cells for the only cell on the grid', () => {
    const grid = InitGridState(1, 1);
    const cell = {
      rowPosition: 0,
      columnPosition: 0,
    };
    const neighbors = GetAllNeighbouringCells(cell, grid);

    expect(neighbors.length).toBe(0);
  });

  test('returns 1 neighboring cell for the first cell on a grid with one row and 3 columns', () => {
    const grid = InitGridState(1, 3);
    const cell = {
      rowPosition: 0,
      columnPosition: 0,
    };
    const neighbors = GetAllNeighbouringCells(cell, grid);

    expect(neighbors.length).toBe(1);
  });

  test('returns 2 neighboring cells for the second cell on a grid with one row and 3 columns', () => {
    const grid = InitGridState(1, 3);
    const cell = {
      rowPosition: 0,
      columnPosition: 1,
    };
    const neighbors = GetAllNeighbouringCells(cell, grid);

    expect(neighbors.length).toBe(2);
  });

  test('returns 3 neighboring cells for the first cell on a grid with 2 rows and 2 columns', () => {
    const grid = InitGridState(2, 2);
    const cell = {
      rowPosition: 0,
      columnPosition: 0,
    };
    const neighbors = GetAllNeighbouringCells(cell, grid);

    expect(neighbors.length).toBe(3);
  });

  test('returns 8 neighboring cells for the center cell on a grid with 3 rows and 3 columns', () => {
    const grid = InitGridState(3, 3);
    const cell = {
      rowPosition: 1,
      columnPosition: 1,
    };
    const neighbors = GetAllNeighbouringCells(cell, grid);

    expect(neighbors.length).toBe(8);
  });
});

describe('Calculate cell state', () => {
  test('returns a dead cell for the only dead cell on the grid', () => {
    const grid = InitGridState(1, 1);
    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 0);

    const newCell = EvolveCell(cell, grid);

    expect(newCell.alive).toBe(false);
  });

  test('returns a dead cell for the only live cell on the grid', () => {
    const grid = InitGridState(1, 1);
    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 0);
    const newCell = EvolveCell({...cell, alive: true}, grid);

    expect(newCell.alive).toBe(false);
  });

  test('returns a dead cell for the only live cell on the grid', () => {
    const grid = InitGridState(1, 1);
    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 0);

    const newCell = EvolveCell({...cell, alive: true}, grid);

    expect(newCell.alive).toBe(false);
  });

  test('returns a dead cell for the first cell on a grid with 1 row and 3 columns of dead cells', () => {
    const grid = InitGridState(1, 3);
    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 0);

    const newCell = EvolveCell(cell, grid);

    expect(newCell.alive).toBe(false);
  });

  test('returns a dead cell for the first cell on a grid with 1 row and 3 columns of live cells', () => {
    let grid = InitGridState(1, 3);
    grid = grid.map(c => ({ ...c, alive: true }));

    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 0);
    const newCell = EvolveCell(cell, grid);

    expect(newCell.alive).toBe(false);
  });

  test('returns a dead cell for the second cell on a grid with 1 row and 3 columns of dead cells', () => {
    let grid = InitGridState(1, 3);

    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 1);
    const newCell = EvolveCell(cell, grid);

    expect(newCell.alive).toBe(false);
  });

  test('returns a live cell for the second cell on a grid with 1 row and 3 columns, surrounded with live cells', () => {
    let grid = InitGridState(1, 3);
    grid = grid.map(c => ({ ...c, alive: true }));

    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 1);
    const newCell = EvolveCell(cell, grid);

    expect(newCell.alive).toBe(true);
  });

  test('returns a live cell for a dead cell on a 2 by 2 grid, surrounded with live cells', () => {
    let grid = InitGridState(2, 2);
    grid = grid.map(c => ({ ...c, alive: true }));

    const cell = grid.find(c => c.rowPosition == 0 && c.columnPosition == 0);
    const newCell = EvolveCell({...cell, alive: false}, grid);

    expect(newCell.alive).toBe(true);
  });
});