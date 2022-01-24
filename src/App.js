import "./scss/adminPanel.css";
import AdminLogin from "./Pages/AdminLogin.Page";
import AdminPanel from "./Pages/AdminPanel.Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/home/*" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
