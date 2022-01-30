import "./scss/adminPanel.css";
import AdminLogin from "./Pages/AdminLogin.Page";
import AdminPanel from "./Pages/AdminPanel.Page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/adminResponsive.css";

import AdminSideBarContextProvider from "./contexts/AdminSideBar.context";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact="true" element={<AdminLogin />} />
          <Route
            path="/admin/*"
            element={
              <AdminSideBarContextProvider>
                <AdminPanel />
              </AdminSideBarContextProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
