import "./scss/adminPanel.css";
import AdminLogin from "./Pages/AdminLogin.Page";
import AdminPanel from "./Pages/AdminPanel.Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/adminResponsive.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin/*" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
