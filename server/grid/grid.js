import Cell from "./cell.js"

export default class Grid {
    constructor(height, width, gameState) {
      this.height = height;
      this.width = width;
      this.cells = this.createCells(gameState);
    //   this.grid = this.createGrid();
    }
  
    createCells(gameState) {
      const cells = [];
      for (let i = 0; i < this.height * this.width; i++) {
        var newCell = new Cell(i, gameState[i])
        cells.push(newCell);
      }
      return cells;
    }
  

  }
  