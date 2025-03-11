import { useCallback, useEffect, useState } from "react";
import { Play, Pause, RotateCcw, ChevronLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Square = () => {
    const navigate = useNavigate();
    const [rows, setRows] = useState(20);
    const [cols, setCols] = useState(30);

    useEffect(() => {
        const updateGridSize = () => {
            if (window.innerWidth < 768) {
                setCols(15);
                setRows(25);
            } else {
                setCols(30);
                setRows(20);
            }
        };
        updateGridSize();
        window.addEventListener('resize', updateGridSize);
        return () => window.removeEventListener('resize', updateGridSize);
    }, []);

    const [grid, setGrid] = useState(Array.from(
        { length: rows }, () => Array.from({ length: cols }, () => false)));
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setGrid(Array.from(
            { length: rows }, () => Array.from({ length: cols }, () => false)));
    }, [rows, cols]);

    const toggleCellState = (row:number, col:number) => {
        setGrid(prevGrid => {
            const newGrid = prevGrid.map(r => [...r]);
            newGrid[row][col] = !newGrid[row][col];
            return newGrid;
        });
    };

    const getNeighbors = (grid:boolean[][], row:number, col:number) => {
        const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1] ];
        return directions.reduce((acc, [dx, dy]) => {
            const newRow = row + dx, newCol = col + dy;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) acc += grid[newRow][newCol] ? 1 : 0;
            return acc;
        }, 0);
    };

    const updateGrid = useCallback(() => {
        setGrid(prevGrid => prevGrid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                const neighbors = getNeighbors(prevGrid, rowIndex, colIndex);
                return cell ? (neighbors === 2 || neighbors === 3) : neighbors === 3;
            })
        ));
    }, []);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(updateGrid, 500);
            return () => clearInterval(interval);
        }
    }, [isRunning, updateGrid]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4 text-white w-screen max-w-screen">
            <div className="mt-6 w-full flex flex-wrap justify-center gap-2 md:gap-4">
                <button onClick={() => navigate(-1)} className="px-3 py-2 flex items-center gap-2 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600">
                    <ChevronLeft size={18} /> Back
                </button>
                <button onClick={() => setIsRunning(!isRunning)} className="px-3 py-2 flex items-center gap-2 bg-purple-500 rounded-lg shadow-md hover:bg-purple-700">
                    {isRunning ? <Pause size={18} /> : <Play size={18} />} {isRunning ? "Pause" : "Play"}
                </button>
                <button onClick={() => setGrid(Array.from({ length: rows }, () => Array.from({ length: cols }, () => false)))} className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">
                    <RotateCcw size={18} /> Reset
                </button>
                <button onClick={() => setGrid(Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.random() < 0.3)))} className="px-3 py-2 flex items-center gap-2 bg-green-500 rounded-lg shadow-md hover:bg-green-700">
                    <Sparkles size={18} /> Seed
                </button>
            </div>
            
            <div className="grid gap-[2px] mt-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(10px, 1fr))` }}>
                {grid.map((row, rowIndex) =>
                    row.map((isAlive, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 rounded-sm transition-colors ${isAlive ? "bg-white" : "bg-gray-600"}`}
                            onClick={() => toggleCellState(rowIndex, colIndex)}
                        ></div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Square;