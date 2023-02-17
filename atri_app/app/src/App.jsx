import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Home1 from "./pages/Home1.jsx";
import Home2 from "./pages/Home2.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Home1" element={<Home1 />} />
<Route path="/Home2" element={<Home2 />} />
    </Routes>
  );
}
