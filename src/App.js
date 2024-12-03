import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Share } from "./Share";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Share />} />
          <Route path="/app" element={<Share />} />
          <Route path="*" element={<Share />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
