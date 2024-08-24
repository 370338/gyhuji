// GameOfLife.jsx
import React, { useEffect, useRef } from "react";

const GameOfLife = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    const cellSize = 30;
    let rows = Math.ceil(canvas.height / cellSize);
    let cols = Math.ceil(canvas.width / cellSize);

    let grid = createGrid(rows, cols);

    function createGrid(rows, cols) {
      const grid = [];
      for (let row = 0; row < rows; row++) {
        const rowArray = [];
        for (let col = 0; col < cols; col++) {
          rowArray.push(Math.random() > 0.7 ? 1 : 0);
        }
        grid.push(rowArray);
      }
      return grid;
    }

    function drawGrid(grid) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          ctx.fillStyle = grid[row][col] ? "#FEE11A" : "#007030";
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }

    function getNeighborCount(grid, row, col) {
      const deltas = [-1, 0, 1];
      let count = 0;

      deltas.forEach((dRow) => {
        deltas.forEach((dCol) => {
          if (dRow === 0 && dCol === 0) return;

          const newRow = row + dRow;
          const newCol = col + dCol;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            count += grid[newRow][newCol];
          }
        });
      });

      return count;
    }

    function updateGrid(grid) {
      const newGrid = grid.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
          const neighbors = getNeighborCount(grid, rowIndex, colIndex);
          if (cell) {
            return neighbors === 2 || neighbors === 3 ? 1 : 0;
          } else {
            return neighbors === 3 ? 1 : 0;
          }
        });
      });
      return newGrid;
    }

    function gameLoop() {
      grid = updateGrid(grid);
      drawGrid(grid);
    }

    // Slow down the game loop by setting an interval (e.g., 123 milliseconds)
    const intervalId = setInterval(gameLoop, 123);

    // Initial draw
    drawGrid(grid);

    // Handle window resize
    window.addEventListener("resize", () => {
      resizeCanvas();
      rows = Math.ceil(canvas.height / cellSize);
      cols = Math.ceil(canvas.width / cellSize);
      grid = createGrid(rows, cols);
    });

    // Clean up on component unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} id="gameOfLifeCanvas"></canvas>;
};

export default GameOfLife;
