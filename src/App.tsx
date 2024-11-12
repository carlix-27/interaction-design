import React from "react";
import "./App.css";
import VisualizeContentHome from "./pages/VisualizeContent/VisualizeContentHome";
import VisualizeContentCourseInfo from "./pages/VisualizeContent/VisualizeContentCourseInfo";
import VisualizeContentUnitInfo from "./pages/VisualizeContent/VisualizeContentUnitInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<VisualizeContentHome />} />
          <Route path={"/course"} element={<VisualizeContentCourseInfo />} />
          <Route path={"/unit"} element={<VisualizeContentUnitInfo />} />
            <Route path={"/home"} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
