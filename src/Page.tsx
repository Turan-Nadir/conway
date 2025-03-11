import { ChevronRight, Hexagon, Square, Play, GithubIcon } from 'lucide-react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur"></div>
            <h1 className="relative text-6xl font-extrabold tracking-tight">
              Conway's Game of Life
            </h1>
          </div>
          
          <p className="max-w-2xl text-xl mb-10 text-gray-300">
            Experience the beauty of emergent patterns in different geometric worlds
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a 
              href="/hex" 
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-purple-500/25 hover:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="flex items-center">
                <Hexagon className="mr-2 h-6 w-6" />
                <span className="font-bold text-lg">Hexagon Grid</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
            
            <a 
              href="/simple" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="flex items-center">
                <Square className="mr-2 h-6 w-6" />
                <span className="font-bold text-lg">Square Grid</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </div>
          <a 
              href="https://github.com/Turan-Nadir/conway.git" target='_blank'
              className=" mt-4 group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="flex items-center">
                <GithubIcon className="mr-2 h-6 w-6" />
                <span className="font-bold text-lg">Clone Repo</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
        </div>
      </div>
      
      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">What is Conway's Game of Life?</h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg mb-8">
            <p className="mb-4 text-xl">
              Conway's Game of Life is a cellular automaton devised by mathematician John Conway in 1970. 
              It's a zero-player game that simulates how cells live, die, and multiply based on their surrounding neighbors.
            </p>
            
            <p className="mb-4 text-xl">
              The evolution of the cells follows these simple rules:
            </p>
            
            <ul className="list-disc pl-5 mb-4 space-y-2 ">
              <li className='text-lg'>A live cell with fewer than two live neighbors dies (underpopulation)</li>
              <li className='text-lg'>A live cell with two or three live neighbors survives</li>
              <li className='text-lg'>A live cell with more than three live neighbors dies (overpopulation)</li>
              <li className='text-lg'>A dead cell with exactly three live neighbors becomes alive (reproduction)</li>
            </ul>
            
            <p className='text-xl'>
              Despite these simple rules, Conway's Game of Life can create complex and beautiful patterns. 
              Our implementation offers both traditional square grid and hexagonal grid variants, each with its own unique emergent behaviors.
            </p>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
            <div className="bg-purple-600/20 p-4 rounded-lg inline-block mb-4">
              <Hexagon className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hexagon Grid</h3>
            <p className="text-gray-300 text-lg">
              Experience Conway's Game of Life on a hexagonal grid for a fresh perspective. 
              The six-neighbor topology creates fascinating new patterns not possible in the classic version.
            </p>
          </div>
          
          <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
            <div className="bg-blue-600/20 p-4 rounded-lg inline-block mb-4">
              <Square className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Classic Square Grid</h3>
            <p className="text-gray-300 text-lg">
              The original Conway's Game of Life with the traditional square grid and eight-neighbor rule,
              allowing for the creation of well-known patterns like gliders, blinkers, and spaceships.
            </p>
          </div>
          
          <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
            <div className="bg-green-600/20 p-4 rounded-lg inline-block mb-4">
              <Play className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Controls</h3>
            <p className="text-gray-300 text-lg">
              Play, pause, speed up, or slow down the simulation. Draw custom starting configurations
              and watch how they evolve over time according to the rules.
            </p>
          </div>
          
          <div className="bg-gray-800/30 p-6 rounded-xl hover:bg-gray-800/50 transition-colors duration-300">
            <div className="bg-yellow-600/20 p-4 rounded-lg inline-block mb-4">
              <Hexagon className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pattern Library</h3>
            <p className="text-gray-300 text-lg">
              Browse through a collection of interesting preset patterns for both grid types.
              See how classic patterns behave differently in hexagonal space.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className='text-neutral-500 text-sm'>© {new Date().getFullYear()} Conway's Game of Life Explorer • Created with React & Tailwind CSS</p>
          <p className="mt-2 text-sm">robertbenn95@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;