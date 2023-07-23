import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details.js";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/details/details.js" Component={Details}></Route>
      </Routes>
    </main>
  );
}

export default App;