# Conway's Game of Life Explorer

![Conway's Game of Life Explorer](https://conway.glasscube.io)

A beautiful, interactive implementation of Conway's Game of Life with both traditional square grid and hexagonal grid variants, built with React and Tailwind CSS.

## 📸 Screenshots

### Landing Page
![Landing Page](/public/landing.png)
*The landing page introduces users to Conway's Game of Life and provides navigation to different grid variants.*

### Square Grid
![Square Grid](/public/square.png)
*The classic Conway's Game of Life implementation with a square grid.*

### Hexagon Grid
![Hexagon Grid](/public/hex.png)
*A unique implementation of Conway's Game of Life using hexagonal cells.*

## ⚡ Quick Installation

```bash
# Clone the repository
git clone https://github.com/Turan-Nadir/conway.git
cd conway

# Install dependencies
bun install

# Run development server
bun run dev

# Or build for production
bun run build
```

## 🧩 Page Descriptions

### Landing Page (`Page.tsx`)
The landing page serves as the entry point for the application, featuring:
- A visually appealing hero section with the title "Conway's Game of Life"
- Navigation buttons to the Hexagon and Square grid implementations
- An informative section explaining the rules of Conway's Game of Life
- A features section highlighting the different aspects of the application
- A link to the GitHub repository

The landing page is built with a responsive design using Tailwind CSS gradients, animations, and interactive elements that enhance the user experience.

### Hexagon Grid (`Hexagon.tsx`)
The Hexagon Grid page offers a unique twist on Conway's Game of Life by implementing it with hexagonal cells. Features include:
- A responsive hexagonal grid that adapts to different screen sizes
- Interactive controls (Play/Pause, Reset, Seed)
- The ability to toggle individual cells by clicking
- Smooth animations for cell state transitions

The implementation uses the same Game of Life rules but adapts them for a six-neighbor topology, creating fascinating new patterns not possible in the classic version.

### Square Grid (`Square.tsx`)
The Square Grid page provides the traditional Conway's Game of Life experience with:
- A classic square grid with responsive design
- Interactive controls similar to the Hexagon version
- The ability to create custom starting configurations
- The original eight-neighbor rule implementation

This implementation allows for the creation of well-known patterns like gliders, blinkers, and spaceships.

## 🔍 Technical Implementation

Both grid implementations share similar logic:
- React state management for grid data and simulation controls
- useEffect hooks for handling animation frames and responsive design
- Custom algorithms for neighbor counting and rule application
- Tailwind CSS for styling and responsive design

The main difference lies in the cell geometry and neighbor calculation algorithms:
- The Square grid uses 8 adjacent neighbors (orthogonal and diagonal)
- The Hexagon grid uses a modified neighbor calculation suitable for hexagonal topology

## 📱 Responsive Design

The application is fully responsive and adapts to different screen sizes:
- Grid size adjusts based on screen width
- Cell size scales appropriately
- UI controls reflow on smaller screens
- Visual design remains consistent across devices

## 📞 Contact

For questions, suggestions, or contributions, please reach out:

- Website: [glasscube.io](https://glasscube.io)
- Email: [robertbenn95@gmail.com](mailto:robertbenn95@gmail.com)
- GitHub: [Link to Repository](https://github.com/Turan-Nadir/conway.git)

## License

This project is licensed under the MIT License.