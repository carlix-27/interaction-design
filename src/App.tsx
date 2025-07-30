import React from "react";
import "./App.css";
import VisualizeContentHome from "./pages/VisualizeContent/VisualizeContentHome";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/curso"} element={<VisualizeContentHome/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
