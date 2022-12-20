import Index from "./pages/index";
import Calkulator from "./pages/calculator";
import Footer from "./pages/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator" element={<Calkulator />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
