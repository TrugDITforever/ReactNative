import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrawerMenu from "./components/DrawerMenu";
import Users from "./components/Users";
import Recipes from "./components/Recipes";
import Dashboard from "./components/DashBoard";
import styles from "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import SubAppRoute from "./subAppRoute";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <main>
          <Routes>
            <Route path="*" element={<h1>404 not found</h1>}></Route>
            <Route path="/" element={<Login />} />
            <Route path="/drawer/*" element={<SubAppRoute />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users></Users>} />
            <Route path="/recipes" element={<Recipes />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
