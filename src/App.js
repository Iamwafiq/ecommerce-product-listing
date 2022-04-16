import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiscoveryPage from "./routes/DiscoveryPage";
import "./App.css";
import ErrorComponent from "./Components/ErrorComponent";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<DiscoveryPage />} />
          <Route path="/*" element={<ErrorComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
