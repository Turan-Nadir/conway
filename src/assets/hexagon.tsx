import { ArrowLeft, Database, Pause, Play, RefreshCcw } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const Hexagon = () => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(30);
  const [hexSize, setHexSize] = useState({ width: 20, height: 23, margin: 1 });

  useEffect(() => {
    const updateGridSize = () => {
      if (window.innerWidth < 768) {
        setCols(15);
        setRows(25);
        setHexSize({ width: 10, height: 12, margin: 0.5 });
      } else {
        setCols(30);
        setRows(20);
        setHexSize({ width: 20, height: 23, margin: 1 });
      }
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setGrid(Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)));
  }, [rows, cols]);

  const toggleCellState = (row: number, col: number) => {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r) => [...r]);
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  const getNeighbors = (grid: boolean[][], row: number, col: number) => {
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],
      [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];

    return directions.reduce((acc, [dx, dy]) => {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols)
        acc += grid[newRow][newCol] ? 1 : 0;
      return acc;
    }, 0);
  };

  const updateGrid = useCallback(() => {
    setGrid((prevGrid) => {
      return prevGrid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const neighbors = getNeighbors(prevGrid, rowIndex, colIndex);
          if (cell) {
            return neighbors === 2 || neighbors === 3;
          } else {
            return neighbors === 3;
          }
        })
      );
    });
  }, []);

  useEffect(() => {
    let interval: number;
    if (isRunning) interval = setInterval(updateGrid, 500);
    return () => clearInterval(interval);
  }, [isRunning, updateGrid]);

  const handlePlayPause = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setGrid(
      Array.from({ length: rows }, () => Array.from({ length: cols }, () => false))
    );
  };
  const handleSeed = () => {
    const newGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random() < 0.3)
    );
    setGrid(newGrid);
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-900 to-black min-h-screen w-screen text-white">
       <div className="mt-20 w-screen flex justify-center gap-4">
        <button onClick={handlePlayPause} className="px-4 py-2 bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 flex items-center gap-2">
          {isRunning ? <Pause size={20} /> : <Play size={20} />} {isRunning ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2">
          <RefreshCcw size={20} /> Reset
        </button>
        <button onClick={handleSeed} className="px-4 py-2 bg-green-500 rounded-lg shadow-md hover:bg-green-700 flex items-center gap-2">
          <Database size={20} /> Seed
        </button>
        <button onClick={() => window.history.back()} className="px-4 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-900 flex items-center gap-2">
          <ArrowLeft size={20} /> Back
        </button>
      </div>
      <p className='my-4 flex justify-center'>The Conway's Game of Life using Hexagons.</p>

      {/* Ensures grid is centered and responsive */}
      <div className="mr-20 md:mr-72">
        <div
          className="grid gap-[2px]"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            width: `calc(${cols} * ${hexSize.width + hexSize.margin}px)`,
            margin: '0 auto',
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((isAlive, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`transition-all duration-300 ${isAlive ? 'bg-purple-500' : 'bg-gray-800'}`}
                onClick={() => toggleCellState(rowIndex, colIndex)}
                style={{
                  width: `${hexSize.width}px`,
                  height: `${hexSize.height}px`,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  marginLeft: rowIndex % 2 ? `${hexSize.width / 2}px` : '0px', // Offset alternate rows properly
                }}
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
