import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";

const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Router>
        {/* You can add a Navbar here if needed, or remove it if it's unnecessary */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
