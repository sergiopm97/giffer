import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Trending from "./pages/trending";
import Random from "./pages/random";
import Search from "./pages/search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="trending" element={<Trending />} />
      <Route path="random" element={<Random />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
}

export default App;
