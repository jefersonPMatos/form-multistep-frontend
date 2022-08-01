import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Theme } from "./styles/theme";
import { Reset } from "./styles/reset";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import { AuthProvider } from "./Contexts/AuthContext";
import { ProtectedRoutes } from "./middleware/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
      <Reset />
      <Theme />
    </AuthProvider>
  );
}

export default App;
