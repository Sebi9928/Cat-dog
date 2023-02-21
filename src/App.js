import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/my-images" element={<MyImages />} />
        <Route path="/public-images" element={<PublicImages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
