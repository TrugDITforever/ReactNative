import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrawerMenu from "./components/DrawerMenu";
import Users from "./components/Users";
import Recipes from "./components/Recipes";
import Dashboard from "./components/DashBoard";
import Header from "./components/Header";
function SubAppRoute() {
  return (
    <>
      <Header />
      <DrawerMenu />
      <main>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users></Users>} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </main>
    </>
  );
}
export default SubAppRoute;
