import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Game from "./routes/game/game.component";

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path='game' element={<Game />} />
      </Route>
    </Routes>
  );
}

export default App;
