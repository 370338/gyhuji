//import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import GameOfLife from "./gameOfLife"; // Assuming GameOfLife is your component
import GameOfLife from "./GameOfLife";

import Navbar2 from "./components/Navbar2";
import Owen from "./pages/Owen";
import Art from "./pages/Art";
import Design from "./pages/Design";
//import Resume from "./pages/Resume";

//const App = () => {
function App() {
  const [gameKey, setGameKey] = useState(0);

  const handleResetGameOfLife = () => {
    setGameKey((prevKey) => prevKey + 1);
  };

  return (
    <Router>
      <Navbar2 handleResetGameOfLife={handleResetGameOfLife} />
      {/*<Navbar />*/}
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/gyhuji/" element={<GameOfLife key={gameKey} />} />

        <Route path="/gyhuji/about/owen" element={<Owen />} />
        <Route path="/gyhuji/works/art" element={<Art />} />
        <Route path="/gyhuji/works/design" element={<Design />} />
        {/*<Route path="/about/resume" element={<Resume />} />*/}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

/*
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
*/

export default App;
