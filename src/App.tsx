import React from "react";
import "./App.css";
import VisualizeContentHome from "./pages/VisualizeContentHome";
import VisualizeContentCourseInfo from "./pages/VisualizeContentCourseInfo";
import VisualizeContentUnitInfo from "./pages/VisualizeContentUnitInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<VisualizeContentHome />} />
          <Route path={"/course"} element={<VisualizeContentCourseInfo />} />
          <Route path={"/unit"} element={<VisualizeContentUnitInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
